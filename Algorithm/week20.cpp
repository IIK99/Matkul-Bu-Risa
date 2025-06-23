// oop in c++
#include <iostream>
using namespace std;

class mahasiswa {
public:
    int id;
    string nama;
    double nilai;
    mahasiswa(int id, string nama, double nilai) {
        this->id = id;
        this->nama = nama;
        this->nilai = nilai;
    }
    void print() {
        cout << "ID = " << id << endl;
        cout << "Nama = " << nama << endl;
        cout << "Nilai = " << nilai << endl;
    }
};

int main() {
    mahasiswa mahasiswa1(1, "Iik", 100.0);
    mahasiswa1.print();
    mahasiswa mahasiswa2(2, "Rina", 200.0);
    mahasiswa2.print();

    return 0;
}