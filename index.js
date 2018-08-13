// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let customerId = 0;
let mealId = 1;
let deliveryId = 0;

class Neighborhood {
  constructor(name){
    this.name = name;
    this.id = neighborhoodId++;
    store.neighborhoods.push(this);
  }
  
  deliveries(){
    return store.deliveries.filter( delivery => {
      return delivery.neighborhoodId == this.id;
    });
  }
  
  customers(){
    return store.customers.filter( customer => {
      return customer.neighborhoodId == this.id;
    })
  }
  
  meals(){

  }
  
}

class Customer{
  constructor(name, neighborhoodId){
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = customerId++;
    store.customers.push(this);
  }
  
  deliveries(){
    return store.deliveries.filter( delivery => {
      return delivery.customerId == this.id;
    });
  }
  
  meals(){
    return store.meals.filter( meal => {
      return meal.customerId == this.id;
    });
  }
  
  totalSpent(){
    let total = 0;
    for (let meal of this.meals()) {
      total = meal.price + total;
    }
    return total;
  }
}

class Meal{
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = mealId;
    store.meals.push(this);
  }
  
  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.mealId == this.id;
    });
  }
  
  customers(){
    return this.deliveries().map(delivery => store.customers.find(customer =>
    customer.id == delivery.customerId))
  }
  
  static byPrice(){
    return store.meals.slice().sort((a, b) => a.price < b.price)
  }
}

class Delivery{
  constructor(meaId, neighborhoodId, customerId){
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = deliveryId++;
  }
  
  meal(){
    
  }
}