function KanbanStorage() {
    this.KANBAN_BOARDS = "kanban.boards";
    this.DEFAULT_BOARD_ID = "kanban.boards.default";
    this.DEFAULT_BOARD_NAME = "Trang web quản lý công việc";
    this.KANBAN_LAST_BOARD_ID = "kanban.lastBoardId"
}

KanbanStorage.prototype.saveBoard = function(board) {
    window.localStorage.setItem(board.id, JSON.stringify(board));
}

KanbanStorage.prototype.removeBoardById = function(boardId) {
    window.localStorage.removeItem(boardId);
}

KanbanStorage.prototype.saveExistingBoardsList = function(boardList) {
    boardList.forEach(b => delete b.tasks);
    window.localStorage.setItem(this.KANBAN_BOARDS, JSON.stringify(boardList));
}

KanbanStorage.prototype.loadBoardById = function(boardId) {
    var board = JSON.parse(window.localStorage.getItem(boardId));
    if (board == null || board === "undefined") {
        if (boardId == this.DEFAULT_BOARD_ID) {
            board = new Board(this.DEFAULT_BOARD_ID, this.DEFAULT_BOARD_NAME, {});
        } else {
            board = new Board(boardId, "Bảng mới", {});
        }
    }
    return board;
}

KanbanStorage.prototype.listExistingBoards = function() {
    var boards = JSON.parse(window.localStorage.getItem(this.KANBAN_BOARDS));
    if (boards == null || boards == "undefined") {
        return [new Board(this.DEFAULT_BOARD_ID, this.DEFAULT_BOARD_NAME, [])];
    }
    return boards;
}

KanbanStorage.prototype.loadLastBoard = function() {
    var lastBoardId = JSON.parse(window.localStorage.getItem(this.KANBAN_LAST_BOARD_ID));
    if (lastBoardId == null || lastBoardId == "undefined") {
        return this.loadBoardById(this.DEFAULT_BOARD_ID);
    } else {
        return this.loadBoardById(lastBoardId);
    }
}

KanbanStorage.prototype.setLastBoardId = function(lastBoardId) {
    window.localStorage.setItem(this.KANBAN_LAST_BOARD_ID, lastBoardId);
}