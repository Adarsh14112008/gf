class Question{
    constructor() {
        this.input = createInput("Name");
        this.input1 = createInput("answer");
        this.button = createButton('Submit');
        this.title = createElement('h2');
    }


    Display(){
        this.title.html("MyQuiz game");
        this.title.position(350,20);
        this.question.html("question:-how many eye does a spiber have ? ")
        this.question.position(150,80)
        this.Option1.html("4")
        this.Option2.html("8")
        this.Option3.html("0")
        this.Option4.html("2")
        this.Option1.position(150,100)
        this.Option2.position(150,150)
        this.Option3.position(150,175)
        this.Option4.position(150,200)
        this.input.position(150,225)
        this.input.position(200,225)
        this.button .position(200,225)
}

}



