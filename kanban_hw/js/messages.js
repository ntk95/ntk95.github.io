var MESSAGES = {
    "board_new": "Tên bảng mới:",
    "board_rename": "Thông báo tên mới cho hội đồng quản trị hiện tại:",
    "confirm_board_remove": "Xóa bảng {1} và tất cả các công việc của nó. Bạn có chắc không?",
    "confirm_remove_task": "Xóa công việc {1}. Bạn có chắc không?",
    "confirm_archive_task": "Lưu trữ công việc {1}. Bạn có chắc không?",
    "confirm_import_tasks": "Tất cả các công việc từ JSON bên dưới sẽ được nhập vào một bảng mới. Bạn có chắc không?",
    "error_invalid_json": "Đây không phải là JSON hợp lệ.",
}

function message(key) {
    var msg = MESSAGES[key];
    if (msg) {
        for (var i = 1; i < arguments.length; i++) {
            msg = msg.replace("{" + i + "}", arguments[i]);
        }
        return msg;
    } else {
        throw new Error("Không thể tìm thấy tin nhắn!'" + key + "'.");
    }
}