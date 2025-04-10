uniform float uVelocity;

varying vec2 vUv;

void main(){
    vec3 newPosition = position;

    newPosition.y += sin(uv.x * 3.14) * uVelocity * 0.005; 
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1.0);

    vUv = uv;
}