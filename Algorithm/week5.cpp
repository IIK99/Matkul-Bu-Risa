// header
#include <iostream>
using namespace std;

// main
int main()
{
    // deklarasi variabel
    int alas, tinggi;
    double luas;

    // statement
    cout << "Masukkan alas segitiga: ";
    cin >> alas;
    cout << "Masukkan tinggi segitiga: ";
    cin >> tinggi;

    // menghitung luas segitiga
    luas = (alas * tinggi) / 2;

    // output
    cout << "Maka luas segitiga jika:\nAlasnya = " << alas 
         << "\nTingginya = " << tinggi 
         << "\nMaka luas segitiga adalah: " << luas << endl;

    return 0;
}
