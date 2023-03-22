class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = FormatError;
        this.stack = stack; // Не нужно, наследуется от встроенного метода
    }
};