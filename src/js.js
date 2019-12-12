import {TimelineMax} from 'gsap'

let polygon = [464.6, 189.2, 400.1, 189.2, 400, 299.5,
    335.2, 299.5, 400, 299.5, 367.4, 244.1,
    464.5, 299.6, 464.6, 189.2, 432.4, 244.1,
    367.5, 354.7, 400, 299.5, 367.4, 299.5,
    335.2, 299.5, 367.5, 354.7, 367.4, 299.5,
    400, 299.5, 400.1, 189.2, 335.2, 189.2,
    497.3, 245.3, 464.6, 189.2, 464.5, 299.6,
    529.4, 299.8, 497.3, 245.3, 464.5, 299.6,
    400, 299.5, 432.3, 354.9, 432.3, 299.5,
    302.5, 354.6, 335.2, 410.3, 335.2, 299.5,
    270.4, 299.8, 302.5, 354.6, 335.2, 299.5,
    367.4, 244.1, 335.2, 189.2, 335.2, 299.5,
    432.3, 354.9, 464.5, 299.6, 432.3, 299.5,
    400, 299.5, 464.5, 299.6, 432.4, 244.1,
    335.2, 410.3, 400.1, 410.1, 400, 299.5,
    400, 299.5, 400.1, 410.1, 464.6, 410.3,
    303.1, 244, 270.4, 299.8, 335.2, 299.5,
    464.6, 410.3, 497.2, 354.6, 464.5, 299.6,
    335.2, 189.2, 303.1, 244, 335.2, 299.5,
    464.5, 299.6, 497.2, 354.6, 529.4, 299.8,
    335.2, 299.5, 335.2, 410.3, 367.5, 354.7,
    432.3, 354.9, 464.6, 410.3, 464.5, 299.6];
let hi = [227, 297.3, 285, 320.9, 285, 277.6,
    285.3, 157, 227, 157, 285, 277.6,
    227, 157, 227, 297.3, 285, 277.6,
    285, 277.6, 285, 320.9, 344.4, 299.3,
    403.9, 277.6, 285, 277.6, 344.4, 299.3,
    461.6, 437.4, 461.9, 297.2, 403.6, 320.9,
    403.6, 437.4, 461.6, 437.4, 403.6, 320.9,
    227, 437.4, 285, 320.9, 227, 297.3,
    285.3, 437.4, 285, 320.9, 227, 437.4,
    344.4, 299.3, 403.6, 320.9, 403.9, 277.6,
    285, 320.9, 403.6, 320.9, 344.4, 299.3,
    403.9, 277.6, 461.9, 297.2, 461.8, 157,
    403.6, 157, 403.9, 277.6, 461.8, 157,
    403.6, 320.9, 461.9, 297.2, 403.9, 277.6,
    572.2, 179, 572.2, 137, 543.1, 158,
    572.2, 137, 514.1, 137, 543.1, 158,
    514.1, 179, 572.2, 179, 543.1, 158,
    543.1, 158, 514.1, 137, 514.1, 179,
    572.2, 229, 514.1, 229, 543.1, 333.2,
    543.1, 333.2, 572.2, 437.3, 572.2, 229,
    514.1, 229, 514.1, 437.3, 543.1, 333.2,
    514.1, 437.3, 572.2, 437.3, 543.1, 333.2];

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

const render = (context, points) => {
    context.clearRect(0, 0, 800, 600);
    for (let i = 0; i < points.length; i = i + 6) {
        let color = `rgb(239,${72 + i},${54 + i})`;
        context.beginPath();
        context.moveTo(points[i], points[i + 1]);
        context.lineTo(points[i + 2], points[i + 3]);
        context.lineTo(points[i + 4], points[i + 5]);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }
};
let tl = new TimelineMax();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

if (canvas.getContext) {
    render(ctx, polygon);
}

let state = polygon;

hi.onUpdate = () => {
    render(ctx, state)
};
polygon.onUpdate = () => {
    render(ctx, state);
};
canvas.addEventListener('click', function (e) {

    tl.to(state, 1, hi);
});