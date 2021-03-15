class GuestCartService {

    constructor(){
        this.Items = [];
    }

    addItem(item){
        this.Items.push(item);
        console.log(item);
        localStorage.setItem("items",JSON.stringify(this.Items));
        console.log(localStorage.getItem("items"));
    }
    removeItem(unwantedItem){
       this.Items= this.Items.filter(function(item){
            return  item!==unwantedItem
        })
        localStorage.setItem("items",JSON.stringify(this.Items));
    }

    getItems(){
        console.log(JSON.parse(localStorage.getItem("items")));
        return this.Items;
    }

}

export default new GuestCartService