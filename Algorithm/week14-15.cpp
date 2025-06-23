// simple array 
#include <iostream>
using namespace std;

int main() {
    // array 1D
    int array1[5] = {1, 2, 3, 4, 5};
    cout << "Array 1D: " << endl;
    for (int i = 0; i < 5; i++) {
        cout << array1[i] << " ";
    }
    cout << endl;
    
    // array 2D
    int array2[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    cout << "Array 2D: " << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << array2[i][j] << " ";
        }
        cout << endl;
    }

    // array 3D
    int array3[2][2][2] = {{{1, 2}, {3, 4}}, {{5, 6}, {7, 8}}};
    cout << "Array 3D: " << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
                cout << array3[i][j][k] << " ";
            }
            cout << endl;
        }
    }
    return 0;
}