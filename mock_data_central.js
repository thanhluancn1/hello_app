/**
 * =================================================================
 * TỆP MOCK DATA TRUNG TÂM (PHIÊN BẢN "HTML THUẦN")
 * Gán mọi thứ vào "window.APP_MOCK_DATA"
 *
 * CHỈNH SỬA: Đã cập nhật `getExamSuggestions`
 * để các `assignments` con có đầy đủ cấu trúc dữ liệu.
 * =================================================================
 */

// Tạo một đối tượng (object) toàn cục
window.APP_MOCK_DATA = {

  /**
   * 1. DỮ LIỆU TỪ `assigment_detail.html`
   * (ID hard code theo yêu cầu trước)
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
      {
        assignment_id: 3,
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
   *
   * CHỈNH SỬA: Cập nhật các đối tượng "assignments" con.
   */
  getExamSuggestions: function () {
    const exam_suggestion_data = [{
      "lesson_id": 1, 
      "lesson_name": "Bài học tổng hợp về Mệnh đề, Tập hợp, Hàm số và Vector",
      
      "assignment_batches": [
        {
          "batch_id": 1,
          "batch_name": "Batch 1: Ôn tập Chương 1 (Cơ bản)",
          "target_student": "học sinh cả lớp",
          
          "recognition": 5,
          "understanding": 3,
          "application": 2,
          "multiple_choice": 8,
          "essay": 2,
          "true_false": 0,
          "fill_in_blank": 0,
          "total_questions": 10,
          "total_points": 100,
    
          "knowledge_components": [
            {
              "component_id": 1,
              "knowledge_id": 1, 
              "knowledge_name": "Khái niệm mệnh đề và các phép toán",
              "knowledge_type": "Concept",
              
              "recognition": 3,
              "understanding": 2,
              "application": 0,
              "multiple_choice": 5,
              "essay": 0,
              "true_false": 0,
              "fill_in_blank": 0,
              "total_questions": 5,
              "total_points": 40,
              "assignments": [
                // ===== BẮT ĐẦU SỬA ĐỔI =====
                { 
                  "assignment_id": 1, 
                  "question": "Bài 1.1: Nhận biết mệnh đề\nA. Lựa chọn 1\tB. Lựa chọn 2",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 1.1",
                  "answer": "A",
                  "score": 1,
                  "images": {}
                },
                { 
                  "assignment_id": 2, 
                  "question": "Bài 1.2: Lập mệnh đề phủ định\nA. Lựa chọn A\tB. Lựa chọn B",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 1.2",
                  "answer": "B",
                  "score": 1,
                  "images": {}
                },
                { 
                  "assignment_id": 3, 
                  "question": "Bài 1.3: Trắc nghiệm mệnh đề kéo theo\nA. 1\tB. 2\tC. 3\tD. 4",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 1.3",
                  "answer": "C",
                  "score": 1,
                  "images": {}
                },
                { 
                  "assignment_id": 4, 
                  "question": "Bài 1.4: Trắc nghiệm mệnh đề tương đương\nA. Có\tB. Không",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 1.4",
                  "answer": "A",
                  "score": 1,
                  "images": {}
                },
                { 
                  "assignment_id": 5, 
                  "question": "Bài 1.5: Xét tính đúng/sai (Thông hiểu)\nA. Đúng\tB. Sai",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 1.5",
                  "answer": "A",
                  "score": 2,
                  "images": {}
                }
                // ===== KẾT THÚC SỬA ĐỔI =====
              ]
            },
            {
              "component_id": 2,
              "knowledge_id": 2, 
              "knowledge_name": "Các phép toán trên tập hợp",
              "knowledge_type": "Skill",
    
              "recognition": 2,
              "understanding": 1,
              "application": 2,
              "multiple_choice": 3,
              "essay": 2,
              "true_false": 0,
              "fill_in_blank": 0,
              "total_questions": 5,
              "total_points": 60,
              "assignments": [
                // ===== BẮT ĐẦU SỬA ĐỔI =====
                { 
                  "assignment_id": 6, 
                  "question": "Bài 2.1: Tìm Giao của 2 tập hợp (Tự luận)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 2.1",
                  "answer": "Kết quả là {1, 2}",
                  "score": 2.5,
                  "images": {}
                },
                { 
                  "assignment_id": 7, 
                  "question": "Bài 2.2: Tìm Hợp của 2 tập hợp (Tự luận)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 2.2",
                  "answer": "Kết quả là {1, 2, 3, 4}",
                  "score": 2.5,
                  "images": {}
                },
                { 
                  "assignment_id": 8, 
                  "question": "Bài 2.3: Trắc nghiệm tìm Hiệu (Vận dụng)\nA. {1}\tB. {2}\tC. {3}\tD. {4}",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 2.3",
                  "answer": "A",
                  "score": 2,
                  "images": {}
                },
                { 
                  "assignment_id": 9, 
                  "question": "Bài 2.4: Trắc nghiệm Phần bù (Nhận biết)\nA. A\tB. B\tC. C\tD. D",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 2.4",
                  "answer": "B",
                  "score": 1,
                  "images": {}
                },
                { 
                  "assignment_id": 10, 
                  "question": "Bài 2.5: Bài toán đếm số phần tử (Vận dụng)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 2.5",
                  "answer": "42",
                  "score": 2,
                  "images": {}
                }
                // ===== KẾT THÚC SỬA ĐỔI =====
              ]
            }
          ]
        },
        {
          "batch_id": 2,
          "batch_name": "Batch 2: Chuyên đề Hàm số và Vector (Nâng cao)",
          "target_student": "học sinh giỏi",
          
          "recognition": 1,
          "understanding": 3,
          "application": 4,
          "multiple_choice": 4,
          "essay": 4,
          "true_false": 0,
          "fill_in_blank": 0,
          "total_questions": 8,
          "total_points": 100,
    
          "knowledge_components": [
            {
              "component_id": 3,
              "knowledge_id": 3, 
              "knowledge_name": "Xét tính chẵn, lẻ của hàm số",
              "knowledge_type": "Skill",
              
              "recognition": 1,
              "understanding": 1,
              "application": 1,
              "multiple_choice": 1,
              "essay": 2,
              "true_false": 0,
              "fill_in_blank": 0,
              "total_questions": 3,
              "total_points": 30,
              "assignments": [
                // ===== BẮT ĐẦU SỬA ĐỔI =====
                { 
                  "assignment_id": 11, 
                  "question": "Bài 3.1: Nhận diện hàm số chẵn/lẻ\nA. Chẵn\tB. Lẻ\tC. Không chẵn không lẻ",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 3.1",
                  "answer": "A",
                  "score": 1,
                  "images": {}
                },
                { 
                  "assignment_id": 12, 
                  "question": "Bài 3.2: Chứng minh hàm số chẵn (Tự luận)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 3.2",
                  "answer": "f(-x) = f(x)",
                  "score": 2,
                  "images": {}
                },
                { 
                  "assignment_id": 13, 
                  "question": "Bài 3.3: Tìm m để hàm số lẻ (Tự luận Vận dụng)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 3.3",
                  "answer": "m = 0",
                  "score": 3,
                  "images": {}
                }
                // ===== KẾT THÚC SỬA ĐỔI =====
              ]
            },
            {
              "component_id": 4,
              "knowledge_id": 4, 
              "knowledge_name": "Phân tích và tổng hợp vector",
              "knowledge_type": "Skill",
    
              "recognition": 0,
              "understanding": 2,
              "application": 3,
              "multiple_choice": 3,
              "essay": 2,
              "true_false": 0,
              "fill_in_blank": 0,
              "total_questions": 5,
              "total_points": 70,
              "assignments": [
                // ===== BẮT ĐẦU SỬA ĐỔI =====
                { 
                  "assignment_id": 14, 
                  "question": "Bài 4.1: Chứng minh 3 điểm thẳng hàng (Tự luận)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 4.1",
                  "answer": "Vector AB = k * Vector AC",
                  "score": 3,
                  "images": {}
                },
                { 
                  "assignment_id": 15, 
                  "question": "Bài 4.2: Phân tích vector theo 2 vector (Tự luận)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 4.2",
                  "answer": "Vector a = 2*Vector b + 3*Vector c",
                  "score": 3,
                  "images": {}
                },
                { 
                  "assignment_id": 16, 
                  "question": "Bài 4.3: Trắc nghiệm quy tắc hình bình hành\nA. A\tB. B\tC. C\tD. D",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 4.3",
                  "answer": "A",
                  "score": 1,
                  "images": {}
                },
                { 
                  "assignment_id": 17, 
                  "question": "Bài 4.4: Trắc nghiệm tìm tọa độ trung điểm\nA. (1, 2)\tB. (2, 3)\tC. (3, 4)\tD. (4, 5)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 4.4",
                  "answer": "B",
                  "score": 1,
                  "images": {}
                },
                { 
                  "assignment_id": 18, 
                  "question": "Bài 4.5: Trắc nghiệm tìm tọa độ trọng tâm (Vận dụng)\nA. (1, 1)\tB. (2, 2)\tC. (3, 3)\tD. (4, 4)",
                  "solution_guide": "Hướng dẫn giải mẫu cho bài 4.5",
                  "answer": "C",
                  "score": 2,
                  "images": {}
                }
                // ===== KẾT THÚC SỬA ĐỔI =====
              ]
            }
          ]
        }
      ]
    }
    ];
    return exam_suggestion_data;
  },


  /**
   * 3. DỮ LIỆU VÀ HÀM LỌC TỪ `knowledge_data.json`
   * (Đã hard code ID toàn cục theo yêu cầu trước)
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
                            { "knowledge_id": 4, "description": "Nhận biết các tập hợp con và tập hợp bằng nhau.", "knowledge_type": "Concept" },
                            { "knowledge_id": 5, "description": "Thực hiện các phép toán: hợp, giao, hiệu của hai tập hợp.", "knowledge_type": "Skill" }
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
                          "lesson_id": 3,
                          "lesson_number": 1,
                          "lesson_name": "Bài 3: Bất phương trình bậc nhất hai ẩn",
                          "knowledge_units": [
                            { "knowledge_id": 6, "description": "Biểu diễn miền nghiệm của bất phương trình trên mặt phẳng tọa độ.", "knowledge_type": "Skill" }
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
                      "chapter_id": 3,
                      "chapter_number": 1,
                      "chapter_name": "Chuyên đề 1: Mệnh đề toán học",
                      "lessons": [
                        {
                          "lesson_id": 4,
                          "lesson_number": 1,
                          "lesson_name": "Bài 1: Mệnh đề, Mệnh đề phủ định",
                          "knowledge_units": [
                            { "knowledge_id": 7, "description": "Phân biệt mệnh đề và mệnh đề chứa biến.", "knowledge_type": "Concept" }
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
                  "book_id": 3,
                  "book_name": "Vật Lý 10 - Kết nối tri thức",
                  "chapters": [
                    {
                      "chapter_id": 4,
                      "chapter_number": 1,
                      "chapter_name": "Chương 1: Động học",
                      "lessons": [
                        {
                          "lesson_id": 5,
                          "lesson_number": 1,
                          "lesson_name": "Bài 1: Chuyển động thẳng đều",
                          "knowledge_units": [
                            { "knowledge_id": 8, "description": "Viết phương trình chuyển động thẳng đều.", "knowledge_type": "Skill" },
                            { "knowledge_id": 9, "description": "Vẽ đồ thị độ dịch chuyển - thời gian.", "knowledge_type": "Skill" }
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
              "subject_id": 3,
              "subject_name": "Hóa học",
              "books": [
                {
                  "book_id": 4,
                  "book_name": "Hóa học 11 - Kết nối tri thức",
                  "chapters": [
                    {
                      "chapter_id": 5,
                      "chapter_number": 1,
                      "chapter_name": "Chương 1: Cân bằng hóa học",
                      "lessons": [
                        {
                          "lesson_id": 6,
                          "lesson_number": 1,
                          "lesson_name": "Bài 1: Phản ứng thuận nghịch và trạng thái cân bằng",
                          "knowledge_units": [
                            { "knowledge_id": 10, "description": "Phân biệt phản ứng một chiều và phản ứng thuận nghịch.", "knowledge_type": "Concept" },
                            { "knowledge_id": 11, "description": "Hiểu khái niệm hằng số cân bằng (Kc) và ý nghĩa.", "knowledge_type": "Concept" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "subject_id": 4,
              "subject_name": "Ngữ Văn",
              "books": [
                {
                  "book_id": 5,
                  "book_name": "Ngữ Văn 11 - Cánh Diều - Tập 1",
                  "chapters": [
                    {
                      "chapter_id": 6,
                      "chapter_number": 1,
                      "chapter_name": "Bài 1: Thơ ca trữ tình",
                      "lessons": [
                        {
                          "lesson_id": 7,
                          "lesson_number": 1,
                          "lesson_name": "Đọc hiểu: Tây Tiến (Quang Dũng)",
                          "knowledge_units": [
                            { "knowledge_id": 12, "description": "Phân tích hình tượng người lính Tây Tiến.", "knowledge_type": "Skill" },
                            { "knowledge_id": 13, "description": "Cảm nhận vẻ đẹp bi tráng, lãng mạn của bài thơ.", "knowledge_type": "Skill" }
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