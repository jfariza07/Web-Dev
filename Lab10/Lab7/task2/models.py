class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The engine of {self.brand} {self.model} is starting."

    def drive(self):
        return f"{self.brand} {self.model} is now driving."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def start_engine(self):
        return f"The car {self.brand} {self.model} starts with a quiet hum."

    def open_trunk(self):
        return f"Opening the trunk of the {self.model}."


class Truck(Vehicle):
    def __init__(self, brand, model, year, capacity):
        super().__init__(brand, model, year)
        self.capacity = capacity

    def start_engine(self):
        return f"The truck {self.brand} {self.model} starts with a loud roar!"

    def load_cargo(self):
        return f"Loading {self.capacity} tons of cargo."