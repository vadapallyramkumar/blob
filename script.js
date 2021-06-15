// let EVERYDAY_STORIES = [{
//     DATE: '15-06-2021',
//     TITLE: 'HOW MY DAY STARTED',
//     STORY: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
// }, {
//     DATE: '16-06-2021',
//     TITLE: 'HOW MY DAY STARTED',
//     STORY: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
//     CLASS: 'active'
// }]
// window.localStorage.setItem('EVERYDAY_STORIES', JSON.stringify(EVERYDAY_STORIES));
const addStory = (data) => {
    var a = [];
    a = JSON.parse(localStorage.getItem('EVERYDAY_STORIES')) || [];
    a.push(data);
    window.localStorage.setItem('EVERYDAY_STORIES', JSON.stringify(a));
    // EVERYDAY_STORIES.push(data);
    removeactive();
    createStoryDom(data);
}

const removeactive = () => {
    let ele = document.getElementsByClassName('active');
    for(let i = 0 ; i < ele.length ; i++){
        ele[i].classList.remove('active');
    }
};

const createStoryDom = (Story) => {
    let COURSAL = document.createElement('div');
    COURSAL.className = 'carousel-item';
    if(Story.CLASS){
        COURSAL.classList.add(Story.CLASS);
    }
    let DOM = document.createElement('div');
    DOM.className = 'w-100';
    let STORY_DATE = document.createElement('p');
    STORY_DATE.className = 'story_date';
    STORY_DATE.innerHTML = Story.DATE;
    let STORY_TITLE = document.createElement('h3');
    STORY_TITLE.className = 'story_title';
    STORY_TITLE.innerHTML = Story.TITLE;
    let DAY_STORY = document.createElement('p');
    DAY_STORY.className = 'day_story';
    DAY_STORY.innerHTML = Story.STORY;
    DOM.appendChild(STORY_DATE);
    DOM.appendChild(STORY_TITLE);
    DOM.appendChild(DAY_STORY);
    COURSAL.appendChild(DOM)
    document.getElementById('Stories_Container').appendChild(COURSAL);
}

const get_DATA = () => {
    let EVERYDAY_STORY = JSON.parse(window.localStorage.getItem("EVERYDAY_STORIES"));
    if(EVERYDAY_STORY) {
        for(let i = 0 ; i < EVERYDAY_STORY.length ; i++) {
            createStoryDom(EVERYDAY_STORY[i]);
        }
    }
}
get_DATA();


let LOGIN_DIV = document.getElementById('loginDiv');
let STORY_DIV = document.getElementById('addStory');
const showLogin = () => {
    LOGIN_DIV.style.display = 'block';
}

const submitForm = () => {
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(userName && password) {
        if(userName === 'Ram' && password === 'Story'){
            LOGIN_DIV.style.display = 'none';
            STORY_DIV.style.display = 'block';
        } else {
            alert('Enter correct details!')
        }
    } else {
        alert('Please enter required details!')
    }
}

const hideLogin = () => {
    LOGIN_DIV.style.display = 'none';
}


const Story = () => {
    let NEW_STORY_DATE = document.getElementById('storyDate').value;
    let NEW_STORY_TITLE = document.getElementById('storyTitle').value;
    let NEW_STORY = document.getElementById('fullStory').value;
    let obj = {
        DATE: NEW_STORY_DATE,
        TITLE: NEW_STORY_TITLE,
        STORY: NEW_STORY,
        CLASS: 'active'
    }
    addStory(obj);
    document.getElementById('addStory').style.display = 'none'
}