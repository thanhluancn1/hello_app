/**
 * =================================================================
 * FILE QUẢN LÝ TRẠNG THÁI (STATE)
 * Chứa tất cả các biến toàn cục và các hàm get/set
 *
 * CHỈNH SỬA: Đã thêm hàm setAssignmentsFromBatchId
 * =================================================================
 */

// Tạo một đối tượng (object) toàn cục APP_STATE
// để đóng gói tất cả logic trạng thái
window.APP_STATE = (function() {

  // --- 1. Biến trạng thái (private) ---
  let _currentKey = '';
  let _currentAssignment = null;
  let _cropper = null;
  let _assignments = [];
  let _userId = '';
  let _examSuggestions = [];
  let _knowledgeData = null;

  // --- 2. Các hàm Getters / Setters cơ bản ---

  const getKnowledgeData = () => _knowledgeData;
  const setKnowledgeData = (newKnowledgeData) => {
    _knowledgeData = newKnowledgeData;
  };

  const getCurrentKey = () => _currentKey;
  const setCurrentKey = (newCurrentKey) => {
    _currentKey = newCurrentKey;
  };

  const getCurrentAssignment = () => _currentAssignment;
  const setCurrentAssignment = (newCurrentAssignment) => {
    _currentAssignment = newCurrentAssignment;
  };

  const getCropper = () => _cropper;
  const setCropper = (newCropper) => {
    _cropper = newCropper;
  };

  const getUserId = () => _userId;
  const setUserId = (newUserId) => {
    _userId = newUserId;
  };

  /**
   * Trả về MỘT BẢN SAO của mảng assignments.
   */
  const getAssignments = () => {
    return [..._assignments];
  };

  /**
   * Thiết lập mảng assignments.
   */
  const setAssignments = (newAssignments) => {
    _assignments = Array.isArray(newAssignments) ? [...newAssignments] : [];
    // Trả về bản sao của trạng thái mới
    return getAssignments();
  };
  
  /**
   * Trả về MỘT BẢN SAO của mảng exam suggestions.
   */
  const getExamSuggestions = () => {
    return [..._examSuggestions];
  };

  /**
   * Thiết lập mảng exam suggestions.
   */
  const setExamSuggestions = (newSuggestions) => {
    _examSuggestions = Array.isArray(newSuggestions) ? [...newSuggestions] : [];
    return getExamSuggestions();
  };


  // --- 3. Các hàm xử lý logic (Operators) ---

  /**
   * Tìm một bài tập dựa trên ID.
   */
  const getAssignmentById = (assignmentId) => {
    // Luôn chuyển ID sang kiểu số nguyên để so sánh
    const id = parseInt(assignmentId);
    return _assignments.find(a => a.assignment_id === id);
  };

  /**
   * Xóa một bài tập khỏi mảng.
   */
  const removeAssignmentById = (assignmentId) => {
    const id = parseInt(assignmentId);
    _assignments = _assignments.filter(a => a.assignment_id !== id);
    // Trả về trạng thái đã cập nhật
    return getAssignments();
  };

  /**
   * Thêm mới hoặc cập nhật một bài tập.
   */
  const addAssignment = (assignmentData) => {
    if (!assignmentData || typeof assignmentData !== 'object' || assignmentData.assignment_id == null) {
      console.warn("addAssignment: Dữ liệu bài tập không hợp lệ.");
      return getAssignments();
    }

    // 1. Lọc bỏ phiên bản cũ (nếu có)
    _assignments = _assignments.filter(a => a.assignment_id !== assignmentData.assignment_id);

    // 2. Thêm phiên bản mới/đã cập nhật
    _assignments.push(assignmentData);

    // 3. Sắp xếp lại mảng theo assignment_id
    _assignments.sort((a, b) => (a.assignment_id || 0) - (b.assignment_id || 0));

    // Trả về trạng thái đã cập nhật
    return getAssignments();
  };

  // ===== HÀM MỚI ĐƯỢC THÊM THEO YÊU CẦU =====
  /**
   * Nạp (load) các bài tập từ một batch_id cụ thể
   * trong _examSuggestions vào _assignments.
   */
  const setAssignmentsFromBatchId = (batchId) => {
    const targetBatchId = parseInt(batchId);
    if (isNaN(targetBatchId)) {
      console.warn("setAssignmentsFromBatchId: batchId không hợp lệ.", batchId);
      return getAssignments(); // Trả về mảng assignments hiện tại
    }

    let foundBatch = null;

    // Duyệt qua tất cả các lesson để tìm batch_id
    for (const lesson of _examSuggestions) {
      if (lesson.assignment_batches && Array.isArray(lesson.assignment_batches)) {
        foundBatch = lesson.assignment_batches.find(batch => batch.batch_id === targetBatchId);
        if (foundBatch) {
          break; // Đã tìm thấy batch, thoát vòng lặp
        }
      }
    }

    if (foundBatch) {
      // Đã tìm thấy batch. Gom tất cả assignments từ các knowledge_components
      // sử dụng flatMap để làm phẳng mảng
      const allAssignments = foundBatch.knowledge_components.flatMap(component => {
        // Đảm bảo component.assignments là một mảng trước khi cố gắng làm phẳng
        return Array.isArray(component.assignments) ? component.assignments : [];
      });
      
      // TẠO BẢN SAO SÂU (deep copy) của mảng
      // để _assignments có thể được chỉnh sửa mà không ảnh hưởng
      // đến dữ liệu gốc trong _examSuggestions.
      _assignments = JSON.parse(JSON.stringify(allAssignments));

      // Sắp xếp lại mảng theo assignment_id (để nhất quán)
      _assignments.sort((a, b) => (a.assignment_id || 0) - (b.assignment_id || 0));

      console.log(`APP_STATE: Đã nạp ${allAssignments.length} bài tập từ batch ID: ${batchId}`);
      
    } else {
      console.warn(`APP_STATE: Không tìm thấy batch với ID: ${batchId}`);
      _assignments = []; // Nếu không tìm thấy, gán mảng rỗng
    }
    
    return getAssignments(); // Trả về trạng thái _assignments mới
  };
  // ===== KẾT THÚC HÀM MỚI =====

  const getKnowledgeDataByFilter = (gradeLevelName, subjectName, bookName) => {
    // --- BẮT ĐẦU LOGIC LỌC ---

    // 1. Lọc theo Khối (grade_level_name)
    const grade = _knowledgeData.education_data.find(
      g => g.grade_level_name === gradeLevelName
    );
    if (!grade) {
      console.warn(`Không tìm thấy Khối: ${gradeLevelName}`);
      return []; // Trả về mảng rỗng nếu không tìm thấy
    }

    // 2. Lọc theo Môn học (subject_name)
    if (!grade.subjects) return [];
    const subject = grade.subjects.find(
      s => s.subject_name === subjectName
    );
    if (!subject) {
      console.warn(`Không tìm thấy Môn học: ${subjectName}`);
      return [];
    }

    // 3. Lọc theo Sách (book_name)
    if (!subject.books) return [];
    const book = subject.books.find(
      b => b.book_name === bookName
    );
    if (!book) {
      console.warn(`Không tìm thấy Sách: ${bookName}`);
      return [];
    }

    // 4. Trả về mảng 'chapters' tìm được
    // Đây chính là dữ liệu "knowledge_source_data" mới mà bạn muốn
    return book.chapters || [];
  }


  // --- 4. Expose Public API ---
  // Chỉ trả về các hàm mà bên ngoài cần gọi.



  
  return {
    getCurrentKey,
    setCurrentKey,
    
    getCurrentAssignment,
    setCurrentAssignment,
    
    getCropper,
    setCropper,
    
    getUserId,
    setUserId,
    
    getAssignments,
    setAssignments,
    
    getAssignmentById,
    removeAssignmentById,
    addAssignment,

    getExamSuggestions,
    setExamSuggestions,

    // ===== EXPOSE HÀM MỚI =====
    setAssignmentsFromBatchId,
    getKnowledgeDataByFilter,
    getKnowledgeData,
    setKnowledgeData
  };

})(); // <-- IIFE (Immediately Invoked Function Expression)