const summary = document.querySelector(".summary-scores");

async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();
    
    data.forEach(item => {
        const scores = document.createElement('div');
        scores.className = "scores";

        const category = document.createElement('div');
        category.className = "score-type";

        const img = document.createElement('img');
        img.src = item.icon;
        category.appendChild(img);
        category.innerHTML += item.category;
        scores.appendChild(category);

        const score = document.createElement('div');
        score.className = "score";
        score.innerText = item.score;

        const outof = document.createElement('span');
        outof.innerText = " / 100";
        score.appendChild(outof);

        scores.appendChild(score);
        summary.appendChild(scores);
    });
}

getData();