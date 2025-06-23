// struct mahasiswa
#include <iostream>
using namespace std;

struct mahasiswa {
    int id;
    string nama;
    double nilai;
};

int main() {
    mahasiswa mahasiswa1;
    mahasiswa1 = {1, "Iik", 100.0};
    cout << "ID = " << mahasiswa1.id << endl;
    cout << "Nama = " << mahasiswa1.nama << endl;
    cout << "Nilai = " << mahasiswa1.nilai << endl;

    mahasiswa mahasiswa2;
    mahasiswa2 = {2, "Rina", 200.0};
    cout << "ID = " << mahasiswa2.id << endl;
    cout << "Nama = " << mahasiswa2.nama << endl;
    cout << "Nilai = " << mahasiswa2.nilai << endl;

    return 0;
}