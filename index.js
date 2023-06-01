const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

//put out the width and height for calculation
const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: { // Corrected 'option' to 'options'
        wireframes: false, //turn off wire frames mode
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

//Click & Drag
World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
}));

//Walls
const walls = [
    Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
    Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
    Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
];
World.add(world, walls);

//Random Shapes
for (let i = 0; i < 30; i++) {
    //Math.random 0-1 => 0.xxxx (Generating shapes in random width height within carnavs)
    if (Math.random() > 0.3) {
        World.add(world,
            Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
    } else {
        World.add(world,
            Bodies.circle(Math.random() * width, Math.random() * height, 25, {
                render: {
                    fillStyle: 'green' //set circle to 'green'
                }
            }));
    }
}


