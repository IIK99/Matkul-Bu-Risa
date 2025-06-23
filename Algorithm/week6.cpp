#include <iostream>
using namespace std;

int main() {
    int a, b, c;

    cout << "Masukan Nilai A: ";
    cin >> a;
    cout << "Masukan Nilai B: ";
    cin >> b;

    cout << "\n\nNilai A saat ini adalah: " << a << endl;
    cout << "Nilai B saat ini adalah: " << b << endl;

    cout << "\n\n=== TUKAR NILAI A DAN B ===\n\n";

    c = a;
    a = b;
    b = c; // <- tambahan ini yang sebelumnya hilang

    cout << "Nilai A setelah ditukar adalah: " << a << endl;
    cout << "Nilai B setelah ditukar adalah: " << b << endl;

    return 0;
}
