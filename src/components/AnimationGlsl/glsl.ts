"use client";
import * as THREE from "three";
import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";

const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

let targetX: number = 0;
let targetY: number = 0;

export interface ITexture {
  src: string;
}

export const animationCurve = (images: ITexture[], hover?: boolean) => {
  if (images) {
    const texture = images.map((image: ITexture) => {
      return {
        image: new THREE.TextureLoader().load(image.src),
      };
    });

    class WebGL {
      container: HTMLElement | null;
      links: HTMLAnchorElement[];
      scene: THREE.Scene;
      perspective: number;
      sizes: THREE.Vector2;
      offset: THREE.Vector2;
      linkHovered: boolean;
      uniforms: {
        uTexture: { value: THREE.MeshBasicMaterial | THREE.Texture };
        uAlpha: { value: number };
        uOffset: { value: THREE.Vector2 };
      };
      camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
      renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
      geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry();
      material: THREE.ShaderMaterial = new THREE.ShaderMaterial();
      mesh: THREE.Mesh = new THREE.Mesh();

      constructor() {
        this.container = document.querySelector("#renderingCanva");
        this.links = Array.from(document.querySelectorAll("#elementGlsl"));
        this.scene = new THREE.Scene();
        this.perspective = 1000;
        this.sizes = new THREE.Vector2(0, 0);
        this.offset = new THREE.Vector2(0, 0);
        this.linkHovered = false;

        this.uniforms = {
          uTexture: { value: new THREE.MeshBasicMaterial({ color: 0x00ff00 }) },
          uAlpha: { value: 0.0 },
          uOffset: { value: new THREE.Vector2(0.0, 0.0) },
        };

        this.links.forEach((link, idx) => {
          link.addEventListener("mouseenter", () => {
            this.uniforms.uTexture.value = texture[idx].image;
          });
          link.addEventListener("mouseleave", () => {
            this.uniforms.uAlpha.value = lerp(
              this.uniforms.uAlpha.value,
              0.0,
              0.1
            );
          });
        });

        this.addEventListeners(document.querySelector("#containerGlsl"));
        this.setUpCamera();
        this.onMouseMove();
        this.createMesh();
        this.render();
      }

      get viewport() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;

        return {
          width,
          height,
          aspectRatio,
        };
      }

      addEventListeners(element: HTMLElement | null) {
        element?.addEventListener("mouseenter", () => {
          this.linkHovered = true;
        });
        element?.addEventListener("mouseleave", () => {
          this.linkHovered = false;
        });
      }

      setUpCamera() {
        window.addEventListener("resize", this.onWindowResize.bind(this));
        let fov =
          (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
          Math.PI;
        this.camera = new THREE.PerspectiveCamera(
          fov,
          this.viewport.aspectRatio,
          0.1,
          1000
        );
        this.camera.position.set(0, 0, this.perspective);

        this.renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
        });
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container?.appendChild(this.renderer.domElement);
      }

      createMesh() {
        const width = 1;
        const height = 1;
        const segmentsX = 20;
        const segmentsY = 20;

        const widthObject = 1024;
        const heightObject = 768;
        const sizes = 2;

        this.geometry = new THREE.PlaneGeometry(
          width,
          height,
          segmentsX,
          segmentsY
        );

        this.material = new THREE.ShaderMaterial({
          uniforms: this.uniforms,
          vertexShader: vertex, // Make sure to import 'vertex' from your shader file
          fragmentShader: fragment, // Make sure to import 'fragment' from your shader file
          transparent: true,
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.sizes.set(widthObject / sizes, heightObject / sizes);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.scene.add(this.mesh);
      }

      onWindowResize() {
        this.camera.aspect = this.viewport.aspectRatio;
        this.camera.fov =
          (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) /
          Math.PI;
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.camera.updateProjectionMatrix();
      }

      onMouseMove() {
        window.addEventListener("mousemove", e => {
          targetX = e.clientX;
          targetY = e.clientY;
        });
      }

      render() {
        this.offset.x = lerp(this.offset.x, targetX, 0.1);
        this.offset.y = lerp(this.offset.y, targetY, 0.1);
        this.uniforms.uOffset.value.set(
          (targetX - this.offset.x) * 0.0005,
          -(targetY - this.offset.y) * 0.0005
        );

        this.mesh.position.set(
          this.offset.x - window.innerWidth / 2,
          -this.offset.y + window.innerHeight / 2,
          0
        );

        this.linkHovered
          ? (this.uniforms.uAlpha.value = lerp(
              this.uniforms.uAlpha.value,
              1.0,
              0.1
            ))
          : (this.uniforms.uAlpha.value = lerp(
              this.uniforms.uAlpha.value,
              0.0,
              0.1
            ));

        if (hover) {
          for (let i = 0; i < this.links.length; i++) {
            this.linkHovered
              ? (this.links[i].style.opacity = "0.4")
              : (this.links[i].style.opacity = "1");
          }
        }

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
      }
    }

    new WebGL();
  }
};
