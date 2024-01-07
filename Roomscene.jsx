/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 project/public/models/roomscene.gltf -K -k 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/roomscene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Characterspot" position={[0, 0.07, -0.226]} rotation={[-Math.PI, 0.265, -Math.PI]} scale={1.248}>
          <group name="Armature">
            <primitive object={nodes.Hips} />
            <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.003']} skeleton={nodes.Wolf3D_Body.skeleton} />
            <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials['Wolf3D_Hair.003']} skeleton={nodes.Wolf3D_Hair.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.003']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.003']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.003']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
            <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials['Wolf3D_Eye.003']} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
            <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials['Wolf3D_Eye.003']} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials['Wolf3D_Skin.003']} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.003']} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
          </group>
        </group>
        <group name="palm_tree_01" position={[1.633, 0, -1.257]} rotation={[-Math.PI, 0.346, -Math.PI]} scale={0.017}>
          <mesh name="palm_tree_01-Mesh" geometry={nodes['palm_tree_01-Mesh'].geometry} material={materials['795548']} />
          <mesh name="palm_tree_01-Mesh_1" geometry={nodes['palm_tree_01-Mesh_1'].geometry} material={materials['8BC34A']} />
          <mesh name="palm_tree_01-Mesh_2" geometry={nodes['palm_tree_01-Mesh_2'].geometry} material={materials.DD9944} />
        </group>
        <group name="plant" position={[-0.63, 1.104, -1.646]} scale={0.115}>
          <mesh name="mesh1885116500" geometry={nodes.mesh1885116500.geometry} material={materials.mat21} />
          <mesh name="mesh1885116500_1" geometry={nodes.mesh1885116500_1.geometry} material={materials.mat20} />
          <group name="group24448074">
            <mesh name="mesh24448074" geometry={nodes.mesh24448074.geometry} material={materials.mat9} />
            <mesh name="mesh24448074_1" geometry={nodes.mesh24448074_1.geometry} material={materials.mat20} />
          </group>
        </group>
        <mesh name="rug" geometry={nodes.rug.geometry} material={materials.phong1SG} position={[0, 0, 1.092]} />
        <group name="table001_Cube011" position={[-0.023, 0, -1.417]} rotation={[-Math.PI, 1.569, -Math.PI]} scale={0.313}>
          <mesh name="table001_Cube011-Mesh" geometry={nodes['table001_Cube011-Mesh'].geometry} material={materials['TABLE_SURFACE.002']} />
          <mesh name="table001_Cube011-Mesh_1" geometry={nodes['table001_Cube011-Mesh_1'].geometry} material={materials.TABLE_SUPPORT} />
          <mesh name="table001_Cube011-Mesh_2" geometry={nodes['table001_Cube011-Mesh_2'].geometry} material={materials.TABLE_LEGS} />
          <mesh name="table001_Cube011-Mesh_3" geometry={nodes['table001_Cube011-Mesh_3'].geometry} material={materials['TABLE_:EGS_INSIDES']} />
          <mesh name="table001_Cube011-Mesh_4" geometry={nodes['table001_Cube011-Mesh_4'].geometry} material={materials.TABLE_STAND} />
          <mesh name="table001_Cube011-Mesh_5" geometry={nodes['table001_Cube011-Mesh_5'].geometry} material={materials.TABLE_STAND_INSIDE} />
        </group>
        <group name="SM_ShelfSM_Shelf1" position={[-0.998, 1.547, -2.211]} scale={0.484}>
          <mesh name="SM_ShelfSM_Shelf1_1" geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={materials.lambert2SG} />
          <mesh name="SM_ShelfSM_Shelf1_1_1" geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={materials.lambert3SG} />
        </group>
        <group name="charmender" position={[-0.631, 1.89, -2.205]} rotation={[-Math.PI, 0.772, -Math.PI]} scale={0.239}>
          <mesh name="mesh434900071" geometry={nodes.mesh434900071.geometry} material={materials.mat14} />
          <mesh name="mesh434900071_1" geometry={nodes.mesh434900071_1.geometry} material={materials.mat13} />
          <mesh name="mesh434900071_2" geometry={nodes.mesh434900071_2.geometry} material={materials.mat12} />
          <mesh name="mesh434900071_3" geometry={nodes.mesh434900071_3.geometry} material={materials['mat21.001']} />
          <mesh name="mesh434900071_4" geometry={nodes.mesh434900071_4.geometry} material={materials.mat23} />
          <mesh name="mesh434900071_5" geometry={nodes.mesh434900071_5.geometry} material={materials.mat11} />
        </group>
        <group name="lavalamp" position={[-1.317, 1.889, -2.24]} scale={0.051}>
          <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={materials.lambert4SG} />
          <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={materials['lambert2SG.001']} />
          <mesh name="Node-Mesh_2" geometry={nodes['Node-Mesh_2'].geometry} material={materials['lambert3SG.001']} />
        </group>
        <group name="Houseplant_7" position={[-1.525, 0, -1.615]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh name="Houseplant_7_1" geometry={nodes.Houseplant_7_1.geometry} material={materials.Black} />
          <mesh name="Houseplant_7_2" geometry={nodes.Houseplant_7_2.geometry} material={materials.Brown} />
          <mesh name="Houseplant_7_3" geometry={nodes.Houseplant_7_3.geometry} material={materials.Plant_Green} />
        </group>
        <group name="OfficeChair" position={[-0.041, 0, -0.241]} rotation={[-Math.PI / 2, 0, 2.931]} scale={130.317}>
          <mesh name="OfficeChair_1" geometry={nodes.OfficeChair_1.geometry} material={materials.Grey} />
          <mesh name="OfficeChair_2" geometry={nodes.OfficeChair_2.geometry} material={materials['Black.001']} />
          <mesh name="OfficeChair_3" geometry={nodes.OfficeChair_3.geometry} material={materials.Chair} />
        </group>
        <mesh name="mouse" geometry={nodes.mouse.geometry} material={materials.ComputerMouse_mat1} position={[0.557, 0.968, -1.043]} rotation={[0, -0.571, 0]} scale={0.043} />
        <group name="computer" position={[0.128, 1.408, -1.337]} rotation={[-Math.PI, 0.079, -Math.PI]} scale={0.309}>
          <mesh name="mesh329542522" geometry={nodes.mesh329542522.geometry} material={materials.mat22} />
          <mesh name="mesh329542522_1" geometry={nodes.mesh329542522_1.geometry} material={materials['mat23.001']} />
          <group name="group575146565">
            <mesh name="mesh575146565" geometry={nodes.mesh575146565.geometry} material={materials.mat22} />
            <mesh name="mesh575146565_1" geometry={nodes.mesh575146565_1.geometry} material={materials['mat23.001']} />
            <mesh name="mesh575146565_2" geometry={nodes.mesh575146565_2.geometry} material={materials['mat21.002']} />
          </group>
          <mesh name="Screen" geometry={nodes.Screen.geometry} material={materials.mat22} />
          <mesh name="Screen2" geometry={nodes.Screen2.geometry} material={materials.mat22} />
        </group>
        <group name="Rock_Band_Poster_Plane002" position={[0.897, 1.471, -2.41]} rotation={[Math.PI, -0.009, Math.PI]} scale={0.124}>
          <mesh name="Rock_Band_Poster_Plane002-Mesh" geometry={nodes['Rock_Band_Poster_Plane002-Mesh'].geometry} material={materials['1A1A1A']} />
          <mesh name="Rock_Band_Poster_Plane002-Mesh_1" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_1'].geometry} material={materials['DD9944.001']} />
          <mesh name="Rock_Band_Poster_Plane002-Mesh_2" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_2'].geometry} material={materials.F44336} />
          <mesh name="Rock_Band_Poster_Plane002-Mesh_3" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_3'].geometry} material={materials.FFFFFF} />
          <mesh name="Rock_Band_Poster_Plane002-Mesh_4" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_4'].geometry} material={materials['039BE5']} />
          <mesh name="Rock_Band_Poster_Plane002-Mesh_5" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_5'].geometry} material={materials['795548.001']} />
          <mesh name="Rock_Band_Poster_Plane002-Mesh_6" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_6'].geometry} material={materials['00BCD4']} />
          <mesh name="Rock_Band_Poster_Plane002-Mesh_7" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_7'].geometry} material={materials.FFCC88} />
          <mesh name="Rock_Band_Poster_Plane002-Mesh_8" geometry={nodes['Rock_Band_Poster_Plane002-Mesh_8'].geometry} material={materials['009688']} />
        </group>
        <group name="Plane" scale={3.121}>
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials.Floor} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials.Default} />
          <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials.Wall} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/roomscene.gltf')