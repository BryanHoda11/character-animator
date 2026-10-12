import { Suspense, useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const ANIMATION_FILES = {
    Idle: "/models/character_idle.glb",
    Run: "/models/character_run.glb",
    Wave: "/models/character_wave.glb",
    Jump: "/models/character_jump.glb",
    Fight: "/models/character_fight.glb",
    Dance: "/models/character_dance.glb",
    Kick: "/models/character_kick.glb",
    Salute: "/models/character_salute.glb",
    Push: "/models/character_push.glb",
    Talking: "/models/character_talking.glb",
    Gaming: "/models/character_gaming.glb",
    Singing: "/models/character_singing.glb",
};

function SelectedAnimation({
    url,
    characterScene,
    animationKey,
}) {
    const { animations } = useGLTF(url);

    const { actions } = useAnimations(
        animations,
        characterScene
    );

    useEffect(() => {
        const clip = animations.find((item) => item.name === animationKey) ?? animations[0];
        if (!clip) return;

        const action = actions[clip.name];
        if (!action) return;

        Object.values(actions).forEach((item) => {
            if (item && item !== action) {
                item.stop();
            }
        });

        action.reset().fadeIn(0.2).play();

        return () => {
            action.fadeOut(0.2);
        };
    }, [animations, actions, animationKey]);

    return null;
}

// The idle file supplies both the initial mesh and Idle animation.
export default function Avatar3D({
    character,
    selectedAnimation,
}) {
    const { scene } = useGLTF("/models/character_idle.glb");

    const characterScene = useMemo(
        () => scene,
        [scene]
    );

    const animationKey = selectedAnimation?.animation ?? "Idle";
    const url = ANIMATION_FILES[animationKey] ?? ANIMATION_FILES.Idle;

    return (
        <group rotation={selectedAnimation?.rotation ?? [0, 0, 0]}>
            <primitive object={characterScene} scale={1.5} position={[0, -1.55, 0]} />

            <Suspense fallback={null}>
                <SelectedAnimation key={url} url={url} characterScene={characterScene} animationKey={animationKey} />
            </Suspense>
        </group>
    );
}