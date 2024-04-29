const database = {
    docks: [
        { id: 1, location: "Shanghai, China", maxVolume: "43.5" },
        { id: 2, location: "Busan, South Korea", maxVolume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", maxVolume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", maxVolume: "12.04" }
    ],

    haulers: [
        { 
            id: 1, 
            name: "Pioneering Spirit",
            dockId: 4
        },
        { 
            id: 2, 
            name: "Boaty McBoatface",
            dockId: 1
        },
        { 
            id: 3, 
            name: "Seawise Giant",
            dockId: 1
        },
        { id: 4, 
            name: "Bubba Gump",
            dockId: 2
        },
        { id: 5, 
            name: "Hauly Jolly",
            dockId: 3
        },
        { id: 6,
             name: "Haul O'Ween",
             dockId: 1
            },
        { id: 7, 
            name: "Holla Haulaaah",
            dockId: 2
        }
    ],

    shippingShips: [
        { 
            id: 1, 
            name: "Esso Atlantic",
            haulerId: 5

         },
        { 
            id: 2, 
            name: "Prairial",
            haulerId: 4
         },
        { 
            id: 3, 
            name: "Palais Royal",
            haulerId: 4
         },
        { 
            id: 4, 
            name: "Rivoli",
            haulerId: 7
         },
        { 
            id: 5, 
            name: "Champs Élysée",
            haulerId: 2
         },
        { 
            id: 6, 
            name: "Ever Ace",
            haulerId: 3
         },
        { 
            id: 7, 
            name: "Nissei Maru",
            haulerId: 6
         },
        { 
            id: 8, 
            name: "MSC Gülsün",
            haulerId: 1
         },
        { 
            id: 9, 
            name: "HMM Rotterdam",
            haulerId: 6
         },
        { 
            id: 10,
             name: "CMA CGM Trocadero",
             haulerId: 3
        }
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
