const { createApp } = Vue


createApp({
    data() {
        return {
            isActive: 0,
            lastAccess: '10/01/2020 16:15:22',
            userMessage: "",
            remoteAnswear:"Okey!",
            userSearch: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            
        }

    },
    methods: {
        getNowDate() {
            let currentDate = new Date();
            let day = currentDate.getDate();
            let month = currentDate.getMonth() + 1; 
            let year = currentDate.getFullYear();

            let hours = currentDate.getHours();
            let minutes = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();

            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            let formattedDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
            //returns formatted date
            return formattedDate
        },
        
        newMessage() {
           this.contacts[this.isActive].messages.push(
               {
                   date: this.getNowDate(),
                   message: this.userMessage,
                   status: 'sent'
               }
            );
            console.log(this.userMessage);
            this.userMessage = '';
            console.log(this.contacts[this.isActive].messages);

        },
        chatBot() {
            this.newMessage();
            setTimeout(()=>{
                this.contacts[this.isActive].messages.push(
                    {
                        date: '10/01/2020 16:15:22',
                        message: this.remoteAnswear,
                        status: 'received'
                    }
                );
            }, 1000);           
        },
        quotesChatBotTest() {
            this.newMessage();
            setTimeout(() => {
            
                axios.get('https://type.fit/api/quotes') 
                    .then(response => {
                        const quotes = response.data;
                        const randomIndex = Math.floor(Math.random() * quotes.length);
                        const randomQuote = quotes[randomIndex].text;
                        const randomAuthor = quotes[randomIndex].author;

                        this.remoteAnswear = `"${randomQuote}" - ${randomAuthor}`
                        
                        this.contacts[this.isActive].messages.push({
                            date: this.getNowDate(),
                            message: this.remoteAnswear,
                            status: 'received'
                        });
                        console.log(this.getNowDate());
                    })
                    
            }, 1000);    
            
        },
        messageDelete(i) {
            console.log((this.contacts[this.isActive].messages.length ));
                this.contacts[this.isActive].messages.splice(i, 1)
                console.log('cancellato');
            
        },

        userFinder() {          
            //this starts at ever digit, checks the input to names, if it includes characters in the name it apply the class visibleOn (css: line 88).
            this.contacts.forEach((singleContact,i) => {
                if (!singleContact.name.toLowerCase().includes(this.userSearch.toLowerCase())) {                    
                    this.contacts[i].visible = false;
                    console.log(this.contacts[i].visible);
                    console.log(this.userSearch);

                } else if (singleContact.name.toLowerCase().includes(this.userSearch.toLowerCase())) {
                    this.contacts[i].visible = true;
                    console.log("entrato nell'else: contatto trovato");
                }
            });
            
            
        },

        
        
    },

    mounted() {
        
    },



}).mount('#app')
