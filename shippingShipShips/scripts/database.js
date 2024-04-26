const database = {
    docks: [
        { id: 1, location: "Shanghai, China", maxVolume: "43.5" },
        { id: 2, location: "Busan, South Korea", maxVolume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", maxVolume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", maxVolume: "12.04" }
    ],

    haulers: [
        { id: 1, name: "Pioneering Spirit" },
        { id: 2, name: "Boaty McBoatface" },
        { id: 3, name: "Seawise Giant" },
        { id: 4, name: "Bubba Gump" },
        { id: 5, name: "Hauly Jolly" },
        { id: 6, name: "Haul O'Ween" },
        { id: 7, name: "Holla Haulaaah" }
    ],

    shippingShips: [
        { id: 1, name: "Esso Atlantic" },
        { id: 2, name: "Prairial" },
        { id: 3, name: "Palais Royal" },
        { id: 4, name: "Rivoli" },
        { id: 5, name: "Champs Élysée" },
        { id: 6, name: "Ever Ace" },
        { id: 7, name: "Nissei Maru" },
        { id: 8, name: "MSC Gülsün" },
        { id: 9, name: "HMM Rotterdam" },
        { id: 10, name: "CMA CGM Trocadero" }
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({...shippingShip}))
}
