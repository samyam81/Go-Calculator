package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/calculator", serveCalculator)
	http.Handle("/", http.FileServer(http.Dir(".")))

	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func serveCalculator(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "index.html")
}
