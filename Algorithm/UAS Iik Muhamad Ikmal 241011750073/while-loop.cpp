// looping with while loop
// mirip dengan for loop, hanya saja tidak ada inisialisasi, kondisi, dan increment di dalam satu baris

#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Masukkan nilai n: ";
    cin >> n;

    int i = 1;

    while (i <= n) {
        // menggunakan operator modulus untuk memeriksa apakah i adalah bilangan ganjil
        if (i % 2 != 0) {
            cout << i << " ";
        }
        i++; // increment
    }

    return 0;
}

// atau while loop dengan break
// #include <iostream>
// #include <string>
// using namespace std;

// int main() {
//     string password;
//     int attempts = 0;

//     while (attempts < 3) {
//         cout << "Masukkan password: ";
//         cin >> password;

//         if (password == "rahasia") {
//             cout << "Login berhasil!\n";
//             break;
//         } else {
//             cout << "Password salah.\n";
//         }

//         attempts++;
//     }

//     if (attempts == 3) {
//         cout << "Anda telah gagal login 3 kali.\n";
//     }

//     return 0;
// }