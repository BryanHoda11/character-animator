import { useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

export default function Avatar3D({ character, selectedAnimation }) {

    const { scene } = useGLTF("/models/character_idle.glb");
    // const { scene } = useGLTF(character.model);

    // const clonedScene = useMemo(() => clone(scene), [scene]);

    const { animations: idleAnimation } = useGLTF(
        "/models/character_idle.glb"
    );

    const { animations: runAnimation } = useGLTF(
        "/models/character_run.glb"
    );

    const { animations: waveAnimation } = useGLTF(
        "/models/character_wave.glb"
    );

    const { animations: jumpAnimation } = useGLTF(
        "/models/character_jump.glb"
    );

    const { animations: fightAnimation } = useGLTF(
        "/models/character_fight.glb"
    );

    const { animations: danceAnimation } = useGLTF(
        "/models/character_dance.glb"
    );

    const { animations: kickAnimation } = useGLTF(
        "/models/character_kick.glb"
    );

    const { animations: saluteAnimation } = useGLTF(
        "/models/character_salute.glb"
    );

    const { animations: pushAnimation } = useGLTF(
        "/models/character_push.glb"
    );

    const { animations: talkingAnimation } = useGLTF(
        "/models/character_talking.glb"
    );

    const { animations: gamingAnimation } = useGLTF(
        "/models/character_gaming.glb"
    );

    const { animations: singingAnimation } = useGLTF(
        "/models/character_singing.glb"
    );

    // Combine animations from both files
    const animations = [...idleAnimation, ...runAnimation, ...waveAnimation, ...jumpAnimation, ...fightAnimation, ...danceAnimation, ...kickAnimation, ...saluteAnimation, ...pushAnimation, ...talkingAnimation, ...gamingAnimation, ...singingAnimation];
    const { actions } = useAnimations(animations, scene);
    // const { actions } = useAnimations(animations, clonedScene);

    // useEffect(() => {
    //     console.log(
    //         "Available animations:",
    //         animations.map((animation) => animation.name)
    //     );
    // }, [actions, animations]);

    useEffect(() => {
        if (!selectedAnimation || !actions) return;

        Object.values(actions).forEach((action) => { action?.stop(); });

        const action = actions[selectedAnimation.animation];

        if (!action) {
            console.log("Animation not found:", selectedAnimation.animation);
            return;
        }

        action.reset().fadeIn(0.2).play();

        return () => {
            action.fadeOut(0.2);
        };
    }, [selectedAnimation, actions, character.model]);

    return (
        <group rotation={selectedAnimation.rotation}>
            <primitive object={scene} scale={1.5} position={[0, -1.55, 0]} />
        </group>
    );
}

useGLTF.preload("/models/Adam.glb");
useGLTF.preload("/models/Remy.glb");

useGLTF.preload("/models/character_idle.glb");
useGLTF.preload("/models/character_run.glb");
useGLTF.preload("/models/character_wave.glb");
useGLTF.preload("/models/character_jump.glb");
useGLTF.preload("/models/character_fight.glb");
useGLTF.preload("/models/character_dance.glb");
useGLTF.preload("/models/character_kick.glb");
useGLTF.preload("/models/character_salute.glb");
useGLTF.preload("/models/character_push.glb");
useGLTF.preload("/models/character_talking.glb");
useGLTF.preload("/models/character_gaming.glb");
useGLTF.preload("/models/character_singing.glb");