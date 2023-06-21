export type Driver = {
    "driver_name": string,
    "ts_category": string,
    "ts_name": string,
    "driver_phone": string | number,
    "position": {
        "latitude": string | number,
        "longitude": string | number,
    }
  };

export type Coordinate = {
    latitude: number,
    longitude: number,
  };