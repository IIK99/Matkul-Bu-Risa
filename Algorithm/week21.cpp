// function overloading

#include <iostream>
using namespace std;

// Fungsi cetak dengan 1 parameter
void cetak(int a) {
    cout << "Angka: " << a << endl;
}

// Fungsi cetak dengan 2 parameter
void cetak(int a, int b) {
    cout << "Angka pertama: " << a << ", Angka kedua: " << b << endl;
}

// Fungsi cetak dengan parameter tipe berbeda
void cetak(string teks) {
    cout << "Teks: " << teks << endl;
}

int main() {
    cetak(10);            
    cetak(5, 15);         
    cetak("Halo C++");   
    return 0;
}
// This program demonstrates function overloading in C++.
// It defines three functions named `cetak` with different parameter lists.