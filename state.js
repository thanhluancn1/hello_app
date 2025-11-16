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
  let _knowledgeSourceData = null; // Biến lưu data thô
  let _knowledgeComponents = null;
  let _classExamData = null;

  const getClassExamData = () => _classExamData;
  const setClassExamData = (newClassExamData) => {
    _classExamData = newClassExamData;
  };

  const getKnowledgeComponents = () => _knowledgeComponents;
  const setKnowledgeComponents = (newKnowledgeComponents) => {
    _knowledgeComponents = newKnowledgeComponents;
  };

  // <-- THÊM CÁC HÀM NÀY -->
  const getKnowledgeSourceData = () => _knowledgeSourceData;
  const setKnowledgeSourceData = (sourceData) => {
      _knowledgeSourceData = sourceData;
      console.log("APP_STATE: Đã lưu KnowledgeSourceData thô.");
  };

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

  const getAssignments = () => {
    return [..._assignments];
  };

  const setAssignments = (newAssignments) => {
    _assignments = Array.isArray(newAssignments) ? [...newAssignments] : [];
    return getAssignments();
  };

  const getAssignmentById = (assignmentId) => {
    return _assignments.find(a => a.assignment_id === parseInt(assignmentId));
  };

  const addAssignment = (assignmentData) => {
    if (!assignmentData || typeof assignmentData !== 'object') return getAssignments();
  
    _assignments = _assignments.filter(a => a.assignment_id !== assignmentData.assignment_id);
    _assignments = [..._assignments, assignmentData];
  
    // ✅ Sắp xếp theo assignment_id (số tăng dần)
    _assignments = _assignments.sort((a, b) => (a.assignment_id || 0) - (b.assignment_id || 0));
  
    return getAssignments();
  };

  const getExamSuggestions = () => {
    return [..._examSuggestions];
  };

  const setExamSuggestions = (newSuggestions) => {
    _examSuggestions = Array.isArray(newSuggestions) ? [...newSuggestions] : [];
    return getExamSuggestions();
  };


  // --- 3. Các hàm xử lý logic (Operators) ---

  const setAssignmentsFromBatchId = (batchId) => {
    const targetBatchId = parseInt(batchId);
    if (isNaN(targetBatchId)) {
      console.warn("setAssignmentsFromBatchId: batchId không hợp lệ.", batchId);
      return getAssignments(); 
    }
    let foundBatch = null;
    for (const lesson of _examSuggestions) {
      if (lesson.assignment_batches && Array.isArray(lesson.assignment_batches)) {
        foundBatch = lesson.assignment_batches.find(batch => batch.batch_id === targetBatchId);
        if (foundBatch) break;
      }
    }
    if (foundBatch) {
      const allAssignments = foundBatch.knowledge_components.flatMap(component => {
        return Array.isArray(component.assignments) ? component.assignments : [];
      });
      _assignments = JSON.parse(JSON.stringify(allAssignments));
      _assignments.sort((a, b) => (a.assignment_id || 0) - (b.assignment_id || 0));
      console.log(`APP_STATE: Đã nạp ${allAssignments.length} bài tập từ batch ID: ${batchId}`);
    } else {
      console.warn(`APP_STATE: Không tìm thấy batch với ID: ${batchId}`);
      _assignments = [];
    }
    return getAssignments();
  };

  const removeAssignmentById = (assignmentId) => {
    _assignments = _assignments.filter(a => a.assignment_id !== parseInt(assignmentId));
    setAssignments(_assignments);
    return getAssignments();
  };


  /**
   * (ĐÃ SỬA LỖI)
   * Hàm logic lọc, chạy trên dữ liệu thô đã lưu trong state
   */
  const setKnowledgeComponentsFromBatchId = (batchId) => {
    const targetBatchId = parseInt(batchId);
    if (isNaN(targetBatchId)) {
      console.warn("setKnowledgeComponentsFromBatchId: batchId không hợp lệ.", batchId);
      setKnowledgeComponents([]);
      return getKnowledgeComponents();
    }

    let foundBatch = null;
    for (const lesson of _examSuggestions) {
      if (lesson.assignment_batches && Array.isArray(lesson.assignment_batches)) {
        foundBatch = lesson.assignment_batches.find(batch => batch.batch_id === targetBatchId);
        if (foundBatch) break;
      }
    }

    if (foundBatch && Array.isArray(foundBatch.knowledge_components)) {
      const newKnowledgeComponents = JSON.parse(JSON.stringify(foundBatch.knowledge_components));
      setKnowledgeComponents(newKnowledgeComponents);
      console.log(`APP_STATE: Đã nạp ${newKnowledgeComponents.length} knowledge components từ batch ID: ${batchId}`);
    } else {
      console.warn(`APP_STATE: Không tìm thấy knowledge components cho batch ID: ${batchId}`);
      setKnowledgeComponents([]);
    }

    return getKnowledgeComponents();
  };


  /**
   * (ĐÃ SỬA LỖI)
   * Hàm logic lọc, chạy trên dữ liệu thô đã lưu trong state
   */
  const getKnowledgeDataByFilter = (gradeLevelName, subjectName, bookName) => {
    
    // ===== BẮT ĐẦU SỬA LỖI =====
    // 1. Đọc dữ liệu thô TỪ STATE (_knowledgeSourceData)
    //    thay vì gọi lại APP_MOCK_DATA
    const knowledge_data_json = _knowledgeSourceData;
    // ===== KẾT THÚC SỬA LỖI =====

    // 2. Kiểm tra xem _knowledgeSourceData đã được nạp chưa
    if (!knowledge_data_json || !knowledge_data_json.education_data) {
        console.error("Lỗi State: _knowledgeSourceData đang rỗng (null).");
        console.warn("Bạn có quên gọi APP_STATE.setKnowledgeSourceData() khi tải trang không?");
        return [];
    }

    // 3. Logic lọc (Giữ nguyên)
    const grade = knowledge_data_json.education_data.find(
      g => g.grade_level_name === gradeLevelName
    );
    if (!grade) {
      console.warn(`Không tìm thấy Khối: ${gradeLevelName}`);
      return []; // Trả về mảng rỗng nếu không tìm thấy
    }

    // 4. Lọc theo Môn học (subject_name)
    if (!grade.subjects) return [];
    const subject = grade.subjects.find(
      s => s.subject_name === subjectName
    );
    if (!subject) {
      console.warn(`Không tìm thấy Môn học: ${subjectName}`);
      return [];
    }

    // 5. Lọc theo Sách (book_name)
    if (!subject.books) return [];
    const book = subject.books.find(
      b => b.book_name === bookName
    );
    if (!book) {
      console.warn(`Không tìm thấy Sách: ${bookName}`);
      return [];
    }

    // 6. Trả về mảng 'chapters' tìm được
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
    addAssignment,
    getAssignmentById,
    removeAssignmentById,
    
    getExamSuggestions,
    setExamSuggestions,

    getClassExamData,
    setClassExamData,

    setAssignmentsFromBatchId,

    // ===== SỬA ĐỔI Ở ĐÂY =====
    getKnowledgeData, // Hàm get() cho _knowledgeData
    setKnowledgeData, // Hàm set() cho _knowledgeData
    
    // Hàm get/set cho data thô
    getKnowledgeSourceData,
    setKnowledgeSourceData,

    // Đổi tên hàm lọc cho rõ ràng (theo tên bạn gợi ý)
    getKnowledgeDataByFilter: getKnowledgeDataByFilter,
    // ===== KẾT THÚC SỬA ĐỔI =====

    getKnowledgeComponents,
    setKnowledgeComponents,
    setKnowledgeComponentsFromBatchId,
  };

})(); // <-- IIFE (Immediately Invoked Function Expression)