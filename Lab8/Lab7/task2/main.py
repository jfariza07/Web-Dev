from models import Car, Truck

def main():
    car1 = Car("Toyota", "Camry", 2022, 4)
    car2 = Car("Tesla", "Model 3", 2023, 4)
    truck1 = Truck("Ford", "F-150", 2021, 2.5)
    truck2 = Truck("Volvo", "FH16", 2020, 25)

    vehicles = [car1, car2, truck1, truck2]

    for vehicle in vehicles:
        print(vehicle)
        print(vehicle.start_engine())
        print(vehicle.drive())
        
        if isinstance(vehicle, Car):
            print(f"Doors: {vehicle.doors}")
            print(vehicle.open_trunk())
        elif isinstance(vehicle, Truck):
            print(f"Capacity: {vehicle.capacity} tons")
            print(vehicle.load_cargo())
        
        print("-" * 20)

if __name__ == "__main__":
    main()