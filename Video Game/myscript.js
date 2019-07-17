class Character{
    constructor(name, toughness, power){
    this.name=name;
    this.toughness=toughness;
    this.power=power;
    }
    attack=function(enemy, Item){

        let newToughness=enemy.toughness-Item.power;

        if (enemy.toughness<=0){
            document.getElementById('console').innerHTML =`<p>${enemy.name} is already dead! Are you sadistic?!`;}

        else if (this.toughness<=0){
            document.getElementById('console').innerHTML=`<p> ${this.name} CANNOT attack obviously... they are dead...`;}

            else{
                document.getElementById('console').innerHTML=` <p> ${this.name} attacks ${enemy.name} with a ${Item.name}! <br> ${Item.img}`;
                enemy.toughness=newToughness;
                update();
                if(enemy.toughness<=0){
                    document.getElementById('console').innerHTML=` <p> ${enemy.name} has been slain!<br> ${win.img}`;
                    console.log("Y O U   W I N!");
                }
            }
        }
    print=function(n){
      document.getElementById(n).innerHTML=`<h3>Name: ${this.name} <br> Toughness: ${this.toughness} <br> Power:${this.power} <br> </h3>`;
    }
}
const melee=new Character('Melee', 100, 45);
const mage=new Character('Mage', 100, 35);

//This function updates the toughness of the players//
function update(){
    mage.print('mage');
    melee.print('melee');
}
update();
function Win(img){
    this.img=img;
}
function Item(name, power, img){
    this.name=name;
    this.power=power;
    this.img=img;
}
const win=new Win('<img src="img/win.png" class="Win">');
const item1=new Item('Bow', 11, '<img src="img/bow.png" class="Item">');
const item2=new Item ('Whip', 15, '<img src="img/whip.png" class="Item">');
const item3=new Item('Staff', 10, '<img src="img/staff.png" class="Item">');
const item4=new Item('Crossbow', 13, '<img src="img/crossbow.png" class="Item">');
const item5=new Item('Longsword', 14, '<img src="img/longsword.png" class="Item">');



const items =[item1,item2,item3,item4,item5];

function selectItem(){
    let x=Math.floor(Math.random()*items.length);
    return items[x];
}
selectItem();



