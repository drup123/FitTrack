export const exerciseCategories = [
  {
    id: 1,
    name: "Strength Training",
    icon: "💪",
    description: "Build muscle and increase power",
    color: "bg-red-500"
  },
  {
    id: 2,
    name: "Cardio",
    icon: "❤️",
    description: "Improve heart health and endurance",
    color: "bg-blue-500"
  },
  {
    id: 3,
    name: "Flexibility",
    icon: "🤸",
    description: "Enhance flexibility and mobility",
    color: "bg-green-500"
  },
  {
    id: 4,
    name: "Core",
    icon: "🔥",
    description: "Strengthen your core muscles",
    color: "bg-orange-500"
  }
];

export const exercises = {
  1: [ // Strength Training
    {
      id: 101,
      name: "Push-ups",
      difficulty: "Beginner",
      duration: "3 sets of 8-12 reps",
      targetMuscles: ["Chest", "Shoulders", "Triceps"],
      instructions: [
        "Start in a plank position with hands slightly wider than shoulders",
        "Lower your body until your chest nearly touches the floor",
        "Keep your core tight and body in a straight line",
        "Push back up to the starting position",
        "Repeat for desired reps"
      ],
      tips: [
        "Keep your head neutral, looking down at the floor",
        "Don't let your hips sag or rise too high",
        "Start with knee push-ups if regular push-ups are too difficult"
      ],
      benefits: [
        "Builds upper body strength",
        "Improves core stability",
        "Can be done anywhere without equipment"
      ]
    },
    {
      id: 102,
      name: "Squats",
      difficulty: "Beginner",
      duration: "3 sets of 12-15 reps",
      targetMuscles: ["Quadriceps", "Glutes", "Hamstrings"],
      instructions: [
        "Stand with feet shoulder-width apart",
        "Lower your body as if sitting back into a chair",
        "Keep your chest up and knees behind your toes",
        "Lower until thighs are parallel to the floor",
        "Push through your heels to return to start"
      ],
      tips: [
        "Keep your weight on your heels",
        "Don't let knees cave inward",
        "Keep your core engaged throughout the movement"
      ],
      benefits: [
        "Strengthens lower body muscles",
        "Improves functional movement",
        "Burns calories effectively"
      ]
    },
    {
      id: 103,
      name: "Deadlifts",
      difficulty: "Intermediate",
      duration: "3 sets of 6-8 reps",
      targetMuscles: ["Hamstrings", "Glutes", "Lower Back"],
      instructions: [
        "Stand with feet hip-width apart, weight in front of you",
        "Hinge at the hips and bend forward, keeping back straight",
        "Grab the weight with both hands",
        "Drive through your heels and hips to stand up straight",
        "Lower the weight back down with control"
      ],
      tips: [
        "Keep the weight close to your body",
        "Don't round your back",
        "Start with light weight to master the form"
      ],
      benefits: [
        "Builds posterior chain strength",
        "Improves posture",
        "Functional movement pattern"
      ]
    },
    {
      id: 104,
      name: "Lunges",
      difficulty: "Beginner",
      duration: "3 sets of 10 reps each leg",
      targetMuscles: ["Quadriceps", "Glutes", "Hamstrings", "Calves"],
      instructions: [
        "Stand tall with feet hip-width apart",
        "Step forward with one leg, lowering your hips",
        "Lower until both knees are bent at about 90-degree angles",
        "Keep your front knee over your ankle",
        "Push back to the starting position and repeat"
      ],
      tips: [
        "Keep your torso upright throughout the movement",
        "Don't let your front knee extend past your toes",
        "Engage your core for stability"
      ],
      benefits: [
        "Improves balance and coordination",
        "Strengthens leg muscles unilaterally",
        "Enhances hip flexibility"
      ]
    }
  ],
  2: [ // Cardio
    {
      id: 201,
      name: "Jumping Jacks",
      difficulty: "Beginner",
      duration: "3 sets of 30 seconds",
      targetMuscles: ["Full Body", "Cardiovascular System"],
      instructions: [
        "Stand upright with arms at your sides",
        "Jump up and spread your legs shoulder-width apart",
        "Simultaneously raise your arms overhead",
        "Jump back to the starting position",
        "Repeat in a smooth, continuous motion"
      ],
      tips: [
        "Land softly on the balls of your feet",
        "Keep your core engaged",
        "Maintain a steady rhythm"
      ],
      benefits: [
        "Improves cardiovascular fitness",
        "Burns calories quickly",
        "Full-body workout"
      ]
    },
    {
      id: 202,
      name: "High Knees",
      difficulty: "Beginner",
      duration: "3 sets of 30 seconds",
      targetMuscles: ["Hip Flexors", "Core", "Legs"],
      instructions: [
        "Stand in place with feet hip-width apart",
        "Lift one knee toward your chest",
        "Quickly switch and lift the other knee",
        "Pump your arms as if running",
        "Continue alternating knees rapidly"
      ],
      tips: [
        "Lift knees as high as possible",
        "Stay on the balls of your feet",
        "Keep your torso upright"
      ],
      benefits: [
        "Increases heart rate quickly",
        "Improves coordination",
        "Strengthens hip flexors"
      ]
    },
    {
      id: 203,
      name: "Burpees",
      difficulty: "Advanced",
      duration: "3 sets of 8-10 reps",
      targetMuscles: ["Full Body", "Cardiovascular System"],
      instructions: [
        "Start in a standing position",
        "Drop into a squat with hands on the ground",
        "Jump your feet back into a plank position",
        "Do a push-up",
        "Jump your feet back to squat position and jump up with arms overhead"
      ],
      tips: [
        "Move at your own pace",
        "Focus on form over speed",
        "Modify by stepping instead of jumping"
      ],
      benefits: [
        "Excellent full-body workout",
        "Burns maximum calories",
        "Improves cardiovascular endurance"
      ]
    },
    {
      id: 204,
      name: "Mountain Climbers",
      difficulty: "Intermediate",
      duration: "3 sets of 45 seconds",
      targetMuscles: ["Core", "Shoulders", "Legs", "Cardiovascular System"],
      instructions: [
        "Start in a plank position",
        "Bring one knee toward your chest",
        "Quickly switch legs, bringing the other knee forward",
        "Continue alternating legs rapidly",
        "Keep your hips level and core engaged"
      ],
      tips: [
        "Keep your hands directly under your shoulders",
        "Don't let your hips rise too high",
        "Breathe steadily throughout"
      ],
      benefits: [
        "Improves cardiovascular fitness",
        "Strengthens core muscles",
        "Enhances agility and coordination"
      ]
    }
  ],
  3: [ // Flexibility
    {
      id: 301,
      name: "Cat-Cow Stretch",
      difficulty: "Beginner",
      duration: "2 sets of 10 reps",
      targetMuscles: ["Spine", "Core", "Back"],
      instructions: [
        "Start on hands and knees in tabletop position",
        "Arch your back and look up (Cow pose)",
        "Round your spine toward the ceiling (Cat pose)",
        "Hold each position for 2-3 seconds",
        "Flow smoothly between the two positions"
      ],
      tips: [
        "Move slowly and with control",
        "Focus on the movement of your spine",
        "Breathe deeply throughout"
      ],
      benefits: [
        "Improves spinal flexibility",
        "Relieves back tension",
        "Enhances posture"
      ]
    },
    {
      id: 302,
      name: "Forward Fold",
      difficulty: "Beginner",
      duration: "Hold for 30 seconds",
      targetMuscles: ["Hamstrings", "Calves", "Lower Back"],
      instructions: [
        "Stand with feet hip-width apart",
        "Hinge at your hips and fold forward",
        "Let your arms hang toward the floor",
        "Keep a slight bend in your knees",
        "Hold the stretch and breathe deeply"
      ],
      tips: [
        "Don't force the stretch",
        "Keep your weight slightly forward",
        "Relax your neck and shoulders"
      ],
      benefits: [
        "Stretches posterior chain",
        "Calms the nervous system",
        "Improves circulation"
      ]
    },
    {
      id: 303,
      name: "Child's Pose",
      difficulty: "Beginner",
      duration: "Hold for 1 minute",
      targetMuscles: ["Back", "Hips", "Shoulders"],
      instructions: [
        "Start on hands and knees",
        "Sit back on your heels",
        "Extend your arms forward on the ground",
        "Rest your forehead on the floor",
        "Breathe deeply and relax"
      ],
      tips: [
        "Widen your knees if more comfortable",
        "Use a pillow under your forehead if needed",
        "Focus on deep breathing"
      ],
      benefits: [
        "Relieves stress and tension",
        "Stretches back and hips",
        "Promotes relaxation"
      ]
    },
    {
      id: 304,
      name: "Downward Dog",
      difficulty: "Intermediate",
      duration: "Hold for 45 seconds",
      targetMuscles: ["Shoulders", "Hamstrings", "Calves", "Core"],
      instructions: [
        "Start on hands and knees",
        "Tuck your toes under and lift your hips up",
        "Straighten your legs as much as possible",
        "Create an inverted V-shape with your body",
        "Keep your hands firmly planted and head between your arms"
      ],
      tips: [
        "Pedal your feet to warm up your calves",
        "Keep a micro bend in your knees if needed",
        "Press actively through your hands"
      ],
      benefits: [
        "Stretches entire posterior chain",
        "Strengthens shoulders and arms",
        "Improves circulation"
      ]
    }
  ],
  4: [ // Core
    {
      id: 401,
      name: "Plank",
      difficulty: "Beginner",
      duration: "3 sets of 30 seconds",
      targetMuscles: ["Core", "Shoulders", "Glutes"],
      instructions: [
        "Start in a push-up position",
        "Lower to your forearms",
        "Keep your body in a straight line",
        "Engage your core muscles",
        "Hold the position"
      ],
      tips: [
        "Don't let your hips sag or pike up",
        "Keep breathing normally",
        "Start with shorter holds and build up"
      ],
      benefits: [
        "Builds core strength",
        "Improves posture",
        "Enhances stability"
      ]
    },
    {
      id: 402,
      name: "Bicycle Crunches",
      difficulty: "Intermediate",
      duration: "3 sets of 20 reps each side",
      targetMuscles: ["Obliques", "Rectus Abdominis"],
      instructions: [
        "Lie on your back with hands behind your head",
        "Lift your shoulders off the ground",
        "Bring one knee toward your chest",
        "Rotate to touch opposite elbow to knee",
        "Switch sides in a pedaling motion"
      ],
      tips: [
        "Don't pull on your neck",
        "Focus on the rotation",
        "Keep your core engaged throughout"
      ],
      benefits: [
        "Targets oblique muscles",
        "Improves core rotation",
        "Burns calories effectively"
      ]
    },
    {
      id: 403,
      name: "Dead Bug",
      difficulty: "Beginner",
      duration: "3 sets of 10 reps each side",
      targetMuscles: ["Deep Core", "Hip Flexors"],
      instructions: [
        "Lie on your back with arms extended toward ceiling",
        "Bend knees at 90 degrees, shins parallel to floor",
        "Slowly extend opposite arm and leg",
        "Return to starting position with control",
        "Repeat on the other side"
      ],
      tips: [
        "Keep your lower back pressed to the floor",
        "Move slowly and with control",
        "Don't let your back arch"
      ],
      benefits: [
        "Improves core stability",
        "Enhances coordination",
        "Protects lower back"
      ]
    },
    {
      id: 404,
      name: "Russian Twists",
      difficulty: "Intermediate",
      duration: "3 sets of 30 seconds",
      targetMuscles: ["Obliques", "Core", "Hip Flexors"],
      instructions: [
        "Sit with knees bent, feet lifted off ground",
        "Lean back slightly, keeping back straight",
        "Hold hands together in front of chest",
        "Rotate torso from side to side",
        "Touch hands to floor on each side"
      ],
      tips: [
        "Keep your chest up and core engaged",
        "Control the movement, don't rush",
        "Keep feet off the ground for added challenge"
      ],
      benefits: [
        "Strengthens obliques",
        "Improves rotational power",
        "Enhances balance"
      ]
    }
  ]
};