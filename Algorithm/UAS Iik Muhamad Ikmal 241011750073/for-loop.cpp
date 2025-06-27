// looping with for loop
#include <iostream>
using namespace std;
int main() {
    int n;
    cout << "Masukkan jumlah bilangan: ";
    cin >> n;

    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }

    cout << "Jumlah dari 1 sampai " << n << " adalah: " << sum << endl;

    return 0;
}

// for loop dijalankan perulangannya dulu hingga kondisi terpenuhi

// | i | sum sebelum | sum += i | sum sesudah |
// | - | ----------- | -------- | ----------- |
// | 1 | 0           | 0 + 1    | 1           |
// | 2 | 1           | 1 + 2    | 3           |
// | 3 | 3           | 3 + 3    | 6           |
// | 4 | 6           | 6 + 4    | 10          |
// | 5 | 10          | 10 + 5   | 15          |
