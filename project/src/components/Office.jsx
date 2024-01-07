/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 project/public/models/roomscene.gltf 
*/

import React, { useRef } from 'react';
import { useGLTF, useTexture, useVideoTexture } from '@react-three/drei';
import { motion } from "framer-motion-3d";

import * as THREE from "three";

export function Office(props) {

  const { nodes, materials } = useGLTF('models/roomscene.gltf')
  const texture = useTexture("textures/baked.jpg");
  const textureVSCode = useVideoTexture("textures/vscode.mp4");
  const textureScreen = useVideoTexture("textures/room.mp4");

  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map :texture,
  });



  return (
    <group {...props} dispose={null}>
        <group name="Scene">
        <mesh name="Screen" geometry={nodes.Screen.geometry} position={[0.128, 1.408, -1.337]} rotation={[-Math.PI, 0.079, -Math.PI]} scale={0.309}> 
        <meshBasicMaterial map={textureVSCode} toneMapped={false} />
        </mesh>

        <mesh name="Screen2" geometry={nodes.Screen2.geometry} position={[0.128, 1.408, -1.337]} rotation={[-Math.PI, 0.079, -Math.PI]} scale={0.309}>
        <meshBasicMaterial map={textureScreen} toneMapped={false} />
          </mesh>
       <group name="Characterspot" position={[0, 0.07, -0.226]} rotation={[-Math.PI, 0.265, -Math.PI]} scale={1.248}>
        </group>
      <group name="palm_tree_01" position={[1.633, 0, -1.257]} rotation={[-Math.PI, 0.346, -Math.PI]} scale={0.017}>
        <mesh name="palm_tree_01-Mesh" geometry={nodes['palm_tree_01-Mesh'].geometry} material={textureMaterial} />
        <mesh name="palm_tree_01-Mesh_1" geometry={nodes['palm_tree_01-Mesh_1'].geometry} material={textureMaterial} />
        <mesh name="palm_tree_01-Mesh_2" geometry={nodes['palm_tree_01-Mesh_2'].geometry} material={textureMaterial} />
      </group>
      <group name="plant" position={[-0.63, 1.104, -1.646]} scale={0.115}>
        <mesh name="mesh1885116500" geometry={nodes.mesh1885116500.geometry} material={textureMaterial} />
        <mesh name="mesh1885116500_1" geometry={nodes.mesh1885116500_1.geometry} material={textureMaterial} />
        <mesh name="mesh24448074" geometry={nodes.mesh24448074.geometry} material={textureMaterial} />
        <mesh name="mesh24448074_1" geometry={nodes.mesh24448074_1.geometry} material={textureMaterial} />
      </group>
      <mesh name="rug" geometry={nodes.rug.geometry} material={textureMaterial} position={[0, 0, 1.092]} />
      <group name="table001_Cube011" position={[-0.023, 0, -1.417]} rotation={[-Math.PI, 1.569, -Math.PI]} scale={0.313}>
        <mesh name="table001_Cube011-Mesh" geometry={nodes['table001_Cube011-Mesh'].geometry} material={textureMaterial} />
        <mesh name="table001_Cube011-Mesh_1" geometry={nodes['table001_Cube011-Mesh_1'].geometry} material={textureMaterial} />
        <mesh name="table001_Cube011-Mesh_2" geometry={nodes['table001_Cube011-Mesh_2'].geometry} material={textureMaterial} />
        <mesh name="table001_Cube011-Mesh_3" geometry={nodes['table001_Cube011-Mesh_3'].geometry} material={textureMaterial} />
        <mesh name="table001_Cube011-Mesh_4" geometry={nodes['table001_Cube011-Mesh_4'].geometry} material={textureMaterial} />
        <mesh name="table001_Cube011-Mesh_5" geometry={nodes['table001_Cube011-Mesh_5'].geometry} material={textureMaterial} />
      </group>
      <group name="SM_ShelfSM_Shelf1" position={[-0.998, 1.547, -2.211]} scale={0.484}>
        <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={textureMaterial} />
        <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={textureMaterial} />
      </group>
      <group name="charmender" position={[-0.631, 1.89, -2.205]} rotation={[-Math.PI, 0.772, -Math.PI]} scale={0.239}>
        <mesh name="mesh434900071" geometry={nodes.mesh434900071.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_1" geometry={nodes.mesh434900071_1.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_2" geometry={nodes.mesh434900071_2.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_3" geometry={nodes.mesh434900071_3.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_4" geometry={nodes.mesh434900071_4.geometry} material={textureMaterial} />
        <mesh name="mesh434900071_5" geometry={nodes.mesh434900071_5.geometry} material={textureMaterial} />
      </group>
      <group name="lavalamp" position={[-1.317, 1.889, -2.24]} scale={0.051}>
        <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={textureMaterial} />
        <mesh name="Node-Mesh_2" geometry={nodes['Node-Mesh_2'].geometry} material={textureMaterial} />
      </group>
      <group name="Houseplant_7" position={[-1.525, 0, -1.615]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh name="Houseplant_7_1" geometry={nodes.Houseplant_7_1.geometry} material={textureMaterial} />
        <mesh name="Houseplant_7_2" geometry={nodes.Houseplant_7_2.geometry} material={textureMaterial} />
        <mesh name="Houseplant_7_3" geometry={nodes.Houseplant_7_3.geometry} material={textureMaterial} />
      </group>
      <group name="OfficeChair" position={[-0.041, 0, -0.241]} rotation={[-Math.PI / 2, 0, 2.931]} scale={130.317}>
        <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={textureMaterial} />
        <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={textureMaterial} />
        <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={textureMaterial} />
      </group>
      <mesh name="mouse" geometry={nodes.mouse.geometry} material={materials.ComputerMouse_mat1} position={[0.547, 0.968, -1.173]} rotation={[0, -0.571, 0]} scale={0.048} />
      <group name="computer" position={[0.128, 1.408, -1.337]} rotation={[-Math.PI, 0.079, -Math.PI]} scale={0.309}>
       {/* <mesh name="mesh329542522" geometry={nodes.mesh329542522.geometry} material={textureMaterial} />*/}
        <mesh name="mesh329542522_1" geometry={nodes.mesh329542522_1.geometry} material={textureMaterial} />
        <mesh name="mesh575146565" geometry={nodes.mesh575146565.geometry} material={textureMaterial} />
        <mesh name="mesh575146565_1" geometry={nodes.mesh575146565_1.geometry} material={textureMaterial} />
        <mesh name="mesh575146565_2" geometry={nodes.mesh575146565_2.geometry} material={textureMaterial} />
      </group>
      <group name="Rock_Band_Poster_Plane002" position={[0.897, 1.471, -2.41]} rotation={[Math.PI, -0.009, Math.PI]} scale={0.124}>
        <mesh name="Rock_Band_Poster_Plane002-Mesh" geometry={nodes['Rock_Band_Poster_Plane002-Mesh'].geometry} material={textureMaterial} />
        <mesh name="Rock_Band_Poster_Plane002-Mesh_1" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_1'].geometry} material={textureMaterial} />
        <mesh name="Rock_Band_Poster_Plane002-Mesh_2" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_2'].geometry} material={textureMaterial} />
        <mesh name="Rock_Band_Poster_Plane002-Mesh_3" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_3'].geometry} material={textureMaterial} />
        <mesh name="Rock_Band_Poster_Plane002-Mesh_4" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_4'].geometry} material={textureMaterial} />
        <mesh name="Rock_Band_Poster_Plane002-Mesh_5" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_5'].geometry} material={textureMaterial} />
        <mesh name="Rock_Band_Poster_Plane002-Mesh_6" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_6'].geometry} material={textureMaterial} />
        <mesh name="Rock_Band_Poster_Plane002-Mesh_7" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_7'].geometry} material={textureMaterial} />
        <mesh name="Rock_Band_Poster_Plane002-Mesh_8" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_8'].geometry} material={textureMaterial} />
      </group>
      <group name="Plane" scale={3.121}>
        <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={textureMaterial} />
        <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={textureMaterial} />
        <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={textureMaterial} />
      </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/roomscene.gltf')