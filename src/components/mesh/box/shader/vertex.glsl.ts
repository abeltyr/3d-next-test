const vertexShader = /* glsl */ `
void main () {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Elevation
    float waveX = sin(modelPosition.x );
    float waveZ = sin(modelPosition.z );
    float elevation= waveX * waveZ ;
 
 
    vec4 viewPosition= viewMatrix * modelPosition;

    vec4 projectionPosition =  projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

}`;

export default vertexShader;