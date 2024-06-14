# Go-Calculator

This is a basic calculator web application implemented in Go. The calculator allows users to perform simple arithmetic operations like addition, subtraction, multiplication, and division.

## Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/samyam81/Go-Calculator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Go-Calculator
    ```

3. Run the Go server:

    ```bash
    go run main.go
    ```

4. Open your web browser and go to [http://localhost:8080/calculator](http://localhost:8080/calculator) to use the calculator.

5. Use the buttons to input numbers and operators. The result will be displayed in the input field.

## Implementation Details

The calculator is implemented using Go for the server-side logic and HTML, CSS (with Tailwind CSS), and JavaScript for the client-side interface.

- `main.go`: Implements the Go server with a handler to serve the calculator web page.
- `index.html`: Contains the HTML structure of the calculator interface.
- `script.js`: Provides the JavaScript functions for appending characters, clearing the display, and calculating the result.

## Output

![Calculator Output](https://github.com/samyam81/Go-Calculator/blob/main/output/output.png)

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
