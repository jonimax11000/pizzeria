// components/PizzaCard.js
import './CounterComponent.js';

// Importem el component de base
import { BaseComponent } from '../libcomponents/base_component.js'

export class CardComponent extends BaseComponent {
    constructor() {
        super();
        // No afegim shadowDOM, ja que l'hereta de la base
        this.serverURL = "https://pizza-rest-server-production.up.railway.app/";
    }

    static get styles() {
        // Definim els estils principals de la targeta

        return `
        ${BaseComponent.styles} /* Afegim estils del component base !! */

        .card {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
            background-color: #fff;
            gap: 20px;
        }

        .card img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            object-fit: cover;
            flex-shrink: 0;
        }

        .card .content {
            flex: 1;
        }

        .card .content h3 {
            margin: 0 0 10px 0;
            color: #333;
        }

        .card .content p {
            margin: 5px 0;
            color: #555;
        }
        `;
    }
}

// No cal exportar el component
