#include <iostream>

using namespace std;

int prosess (int a, int b) {
    return (a+b);
} 

float prosess (float a, float b) {
    return (a-b);
}

int main() {
    cout << "Hasil : " << prosess(4,5);
    return 0;
}