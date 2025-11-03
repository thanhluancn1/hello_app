/**
 * =================================================================
 * TỆP MOCK DATA TRUNG TÂM (PHIÊN BẢN "HTML THUẦN")
 * Gán mọi thứ vào "window.APP_MOCK_DATA"
 * =================================================================
 */

// Tạo một đối tượng (object) toàn cục
window.APP_MOCK_DATA = {

  /**
   * 1. DỮ LIỆU TỪ `assigment_detail.html`
   * [Nguồn: thanhluancn1/hello_app/hello_app-fc1c05dbd6e940d558c498b242e83f39c6891085/assigment_detail.html]
   */
  fetchAssignments: async function (userId) {
    console.log(`Đã gọi fetchAssignments (mock) cho userId: ${userId}`);
    
    const assignments_data = [
      {
        assignment_id: 1,
        question: "Cho hàm số $y = f(x)$ có bảng biến thiên: \n{{img1}}\n\nA. 3\tB. 2\tC. 0\tD. 1",
        solution_guide: "dựa vào bảng biến thiên xác định số giao điểm $y = f(x)$",
        answer: "A,B",
        score: 1,
        images: { img1: "data:image/jpeg;base64,/9j/4AKKKKAP//Z" }
      },
      {
        assignment_id: 2,
        question: "Tính tích phân $\\int_0^1 x^2 dx$:\nA. 1/2\tB. 1/3\tC. 1/4\tD. 1/5",
        solution_guide: "tích phân cơ bản $\\int_0^1 x^2 dx$",
        answer: "B",
        score: 2,
        images: {}
      },
      // ... (Phần còn lại của dữ liệu bài tập) ...
      {
        assignment_id: 12,
        question: "Tính tích phân $\\int_0^1 x^2 dx$:\nA. 1/2\tB. 1/3\tC. 1/4\tD. 1/5",
        solution_guide: "tích phân cơ bản $\\int_0^1 x^2 dx$",
        answer: "B",
        score: 2,
        images: {}
      }
    ];

    return Promise.resolve(JSON.parse(JSON.stringify(assignments_data)));
  },

  /**
   * 2. DỮ LIỆU TỪ `mock_data.js` (gốc)
   * [Nguồn: thanhluancn1/hello_app/hello_app-fc1c05dbd6e940d558c498b242e83f39c6891085/mock_data.js]
   */
  getExamSuggestions: function () {
    const exam_suggestion_data = [{
      "lesson_id": 101,
      "lesson_name": "Bài học tổng hợp về Mệnh đề, Tập hợp, Hàm số và Vector",
      "assignment_batches": [
        {
          "batch_id": 1,
          "batch_name": "Batch 1: Ôn tập Chương 1 (Cơ bản)",
          "target_student": "học sinh cả lớp",
          "recognition": 5,
          // ... (dữ liệu khác)
        },
        {
          "batch_id": 2,
          "batch_name": "Batch 2: Chuyên đề Hàm số và Vector (Nâng cao)",
          "target_student": "học sinh giỏi",
          "recognition": 1,
          // ... (dữ liệu khác)
        }
      ]
    }];
    return exam_suggestion_data;
  },


  /**
   * 3. DỮ LIỆU VÀ HÀM LỌC TỪ `knowledge_data.json` (ĐÃ VIẾT LẠI)
   * [Nguồn: thanhluancn1/hello_app/hello_app-fc1c05dbd6e940d558c498b242e83f39c6891085/knowledge_data.json]
   *
   * Hàm này sẽ lọc dữ liệu kiến thức dựa trên các tham số
   * và trả về mảng 'chapters' phù hợp.
   */
  getKnowledgeData: function (grade_level_name, subject_name, book_name) {
    
    // Nguồn dữ liệu JSON đầy đủ
    const knowledge_data_json = {
      "education_data": [
        {
          "grade_level_id": 1,
          "grade_level_name": "Khối 10",
          "grade_level": 10,
          "subjects": [
            {
              "subject_id": 1,
              "subject_name": "Toán học",
              "books": [
                {
                  "book_id": 1,
                  "book_name": "Toán 10 - Kết nối tri thức",
                  "chapters": [
                    {
                      "chapter_id": 1,
                      "chapter_number": 1,
                      "chapter_name": "Chương 1: Mệnh đề và Tập hợp",
                      "lessons": [
                        {
                          "lesson_id": 1,
                          "lesson_number": 1,
                          "lesson_name": "Bài 1: Mệnh đề",
                          "knowledge_units": [
                            { "knowledge_id": 1, "description": "Hiểu khái niệm mệnh đề, mệnh đề chứa biến.", "knowledge_type": "Concept" },
                            { "knowledge_id": 2, "description": "Biết cách xác định tính đúng/sai của một mệnh đề.", "knowledge_type": "Skill" },
                            { "knowledge_id": 3, "description": "Hiểu về phép phủ định mệnh đề, mệnh đề kéo theo, mệnh đề tương đương.", "knowledge_type": "Concept" }
                          ]
                        },
                        {
                          "lesson_id": 2,
                          "lesson_number": 2,
                          "lesson_name": "Bài 2: Tập hợp và các phép toán trên tập hợp",
                          "knowledge_units": [
                            { "knowledge_id": 1, "description": "Nhận biết các tập hợp con và tập hợp bằng nhau.", "knowledge_type": "Concept" },
                            { "knowledge_id": 2, "description": "Thực hiện các phép toán: hợp, giao, hiệu của hai tập hợp.", "knowledge_type": "Skill" }
                          ]
                        }
                      ]
                    },
                    {
                      "chapter_id": 2,
                      "chapter_number": 2,
                      "chapter_name": "Chương 2: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
                      "lessons": [
                        {
                          "lesson_id": 1,
                          "lesson_number": 1,
                          "lesson_name": "Bài 3: Bất phương trình bậc nhất hai ẩn",
                          "knowledge_units": [
                            { "knowledge_id": 1, "description": "Biểu diễn miền nghiệm của bất phương trình trên mặt phẳng tọa độ.", "knowledge_type": "Skill" }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "book_id": 2,
                  "book_name": "Toán 10 - Cánh Diều",
                  "chapters": [
                    {
                      "chapter_id": 1,
                      "chapter_number": 1,
                      "chapter_name": "Chuyên đề 1: Mệnh đề toán học",
                      "lessons": [
                        {
                          "lesson_id": 1,
                          "lesson_number": 1,
                          "lesson_name": "Bài 1: Mệnh đề, Mệnh đề phủ định",
                          "knowledge_units": [
                            { "knowledge_id": 1, "description": "Phân biệt mệnh đề và mệnh đề chứa biến.", "knowledge_type": "Concept" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "subject_id": 2,
              "subject_name": "Vật Lý",
              "books": [
                {
                  "book_id": 1,
                  "book_name": "Vật Lý 10 - Kết nối tri thức",
                  "chapters": [
                    {
                      "chapter_id": 1,
                      "chapter_number": 1,
                      "chapter_name": "Chương 1: Động học",
                      "lessons": [
                        {
                          "lesson_id": 1,
                          "lesson_number": 1,
                          "lesson_name": "Bài 1: Chuyển động thẳng đều",
                          "knowledge_units": [
                            { "knowledge_id": 1, "description": "Viết phương trình chuyển động thẳng đều.", "knowledge_type": "Skill" },
                            { "knowledge_id": 2, "description": "Vẽ đồ thị độ dịch chuyển - thời gian.", "knowledge_type": "Skill" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "grade_level_id": 2,
          "grade_level_name": "Khối 11",
          "grade_level": 11,
          "subjects": [
            {
              "subject_id": 1,
              "subject_name": "Hóa học",
              "books": [
                {
                  "book_id": 1,
                  "book_name": "Hóa học 11 - Kết nối tri thức",
                  "chapters": [
                    {
                      "chapter_id": 1,
                      "chapter_number": 1,
                      "chapter_name": "Chương 1: Cân bằng hóa học",
                      "lessons": [
                        {
                          "lesson_id": 1,
                          "lesson_number": 1,
                          "lesson_name": "Bài 1: Phản ứng thuận nghịch và trạng thái cân bằng",
                          "knowledge_units": [
                            { "knowledge_id": 1, "description": "Phân biệt phản ứng một chiều và phản ứng thuận nghịch.", "knowledge_type": "Concept" },
                            { "knowledge_id": 2, "description": "Hiểu khái niệm hằng số cân bằng (Kc) và ý nghĩa.", "knowledge_type": "Concept" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "subject_id": 2,
              "subject_name": "Ngữ Văn",
              "books": [
                {
                  "book_id": 1,
                  "book_name": "Ngữ Văn 11 - Cánh Diều - Tập 1",
                  "chapters": [
                    {
                      "chapter_id": 1,
                      "chapter_number": 1,
                      "chapter_name": "Bài 1: Thơ ca trữ tình",
                      "lessons": [
                        {
                          "lesson_id": 1,
                          "lesson_number": 1,
                          "lesson_name": "Đọc hiểu: Tây Tiến (Quang Dũng)",
                          "knowledge_units": [
                            { "knowledge_id": 1, "description": "Phân tích hình tượng người lính Tây Tiến.", "knowledge_type": "Skill" },
                            { "knowledge_id": 2, "description": "Cảm nhận vẻ đẹp bi tráng, lãng mạn của bài thơ.", "knowledge_type": "Skill" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    // --- BẮT ĐẦU LOGIC LỌC ---

    // 1. Lọc theo Khối (grade_level_name)
    const grade = knowledge_data_json.education_data.find(
      g => g.grade_level_name === grade_level_name
    );
    if (!grade) {
      console.warn(`Không tìm thấy Khối: ${grade_level_name}`);
      return []; // Trả về mảng rỗng nếu không tìm thấy
    }

    // 2. Lọc theo Môn học (subject_name)
    if (!grade.subjects) return [];
    const subject = grade.subjects.find(
      s => s.subject_name === subject_name
    );
    if (!subject) {
      console.warn(`Không tìm thấy Môn học: ${subject_name}`);
      return [];
    }

    // 3. Lọc theo Sách (book_name)
    if (!subject.books) return [];
    const book = subject.books.find(
      b => b.book_name === book_name
    );
    if (!book) {
      console.warn(`Không tìm thấy Sách: ${book_name}`);
      return [];
    }

    // 4. Trả về mảng 'chapters' tìm được
    // Đây chính là dữ liệu "knowledge_source_data" mới mà bạn muốn
    return book.chapters || [];
  }

}; // <-- Đóng đối tượng (object) toàn cục