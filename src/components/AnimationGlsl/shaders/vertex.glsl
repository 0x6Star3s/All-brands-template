// Deklaracja uniform - tekstura 2D
uniform sampler2D uTexture;

// Deklaracja uniform - wektor 2D
uniform vec2 uOffset;

// Deklaracja varying - zmienne przechodzące między vertex shaderem a fragment shaderem
varying vec2 vUv;

// Stała z wartością PI
float M_PI = 3.141529;

// Funkcja deformacji krzywej
vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){
    // Deformacja wzdłuż osi X
    position.x = position.x + (sin(uv.y * M_PI) * offset.x);
    
    // Deformacja wzdłuż osi Y
    position.y = position.y + (sin(uv.x * M_PI) * offset.y);

    // Zwrócenie zdeformowanej pozycji
    return position;
}

// Główna funkcja vertex shadera
void main(){
    // Przypisanie wartości współrzędnych tekstury do zmiennej varying vUv
    vUv = uv;

    // Wywołanie funkcji deformationCurve dla obliczenia nowej pozycji
    vec3 newPosition = deformationCurve(position, uv, uOffset);

    // Transformacja pozycji do przestrzeni widzenia kamery
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0) ;
}
