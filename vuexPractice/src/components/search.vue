<template>
    <div class="vueApp">
        <h1>Pantone Color Search</h1>
        <input placeholder="Search a color, season, year, or hex code" v-model="colorSearch" />
        <transition name="openUp">
            <div v-if="colors.length > 0">
                <h2>Pantone Colors</h2>
                <p>(Click to copy to clipboard)</p>
                <transition-group name="openUp" class="colors">
                    <div class="color" v-for="(color, index) in filteredColors" v-bind:key="index"  v-bind:data-clipboard-text="color.hex" v-bind:style="{ backgroundColor: color.hex }" @click="addedToClipboard(color.color, color.hex)">
                        <span>{{ color.color }}</span>
                        <span>{{ color.season }} {{ color.year }}</span>
                    </div>
                </transition-group>
                <transition-group name="slideUp" class="messages">
                    <div class="message" v-for="(message, index) in messages" v-bind:key="index" v-bind:style="{ backgroundColor: message.hex }" @click="removeMessage(index)">
                        {{ message.message }}
                    </div>
                </transition-group>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    computed: {
        filteredColors: function() {
            let self = this;

            return this.colors.filter(function(color) {
                let parts = self.colorSearch.trim().split(" ");

                for(let part of parts) {
                    let searchRegex = new RegExp(part, 'i');

                    if(!(
                            searchRegex.test(color.hex) ||
                            searchRegex.test(color.color) ||
                            searchRegex.test(color.year) ||
                            searchRegex.test(color.season)
                        )) {
                        return false;
                    }
                }

                return true;
            })
        }
    },

    methods: {
        addedToClipboard: function(color, hex) {
            let self = this,
                newMessage = {
                    message: color + " (" +  hex + ") copied to clipboard",
                    hex: hex,
                    timeout: ""
                };

            newMessage.timeout = setTimeout(function() {
                self.messages.shift();
            }, 3000)

            this.messages.push(newMessage);
        },

        removeMessage: function(index) {
            clearTimeout(this.messages[index].timeout);
            this.messages.splice(index, 1);
        }
    },

    mounted() {
       new Clipboard('.color');
    },

    data() {
        return {
            colorSearch: '',
            colors: [
                {
                color: "Primrose Yellow",
                hex: "#f6d258",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Pale Dogwood",
                hex: "#efcec5",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Hazelwood",
                hex: "#d1af94",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Island Paradise",
                hex: "#97d5e0",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Greenery",
                hex: "#88b14b",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Flame",
                hex: "#ef562d",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Pink Yarrow",
                hex: "#d13076",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Niagra",
                hex: "#5587a2",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Kale",
                hex: "#5c7148",
                year: "2017",
                season: "Spring"
                },
                {
                color: "Lapis Blue",
                hex: "#0c4c8a",
                year: "2017",
                season: "Spring"
                },

                //Fall 2016
                {
                color: "Riverside",
                hex: "#4c6a92",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Airy Blue",
                hex: "#92b6d5",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Shark Skin",
                hex: "#838487",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Aurora Red",
                hex: "#b93a32",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Warm Taupe",
                hex: "#af9483",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Dusty Cedar",
                hex: "#ad5d5d",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Lush Meadow",
                hex: "#006e51",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Spicy Mustard",
                hex: "#d8ae47",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Potters Clay",
                hex: "#9e4624",
                year: "2016",
                season: "Fall"
                },
                {
                color: "Bodacious",
                hex: "#b76ba3",
                year: "2016",
                season: "Fall"
                },

                //Spring 2016
                {
                color: "Rose Quartz",
                hex: "#f7cac9",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Peach Echo",
                hex: "#f7786b",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Serenity",
                hex: "#91a8d0",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Snorkel Blue",
                hex: "#034f84",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Buttercup",
                hex: "#fae03c",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Limpet Shell",
                hex: "#98ddde",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Lilac Gray",
                hex: "#9896a4",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Fiesta",
                hex: "#dd4132",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Iced Coffee",
                hex: "#b18f6a",
                year: "2016",
                season: "Spring"
                },
                {
                color: "Green Flash",
                hex: "#79c753",
                year: "2016",
                season: "Spring"
                },

                //Fall 2015
                {
                color: "Dried Herb",
                hex: "#847A59",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Desert Sage",
                hex: "#A7AE9E",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Stormy Weather",
                hex: "#58646D ",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Oak Buff",
                hex: "#CF9C63",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Marsala",
                hex: "#964F4C",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Biscay Bay",
                hex: "#097988",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Reflecting Pond",
                hex: "#203E4A",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Cadmium Orange",
                hex: "#F99471",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Cashmere Rose",
                hex: "#CE879F",
                year: "2015",
                season: "Fall"
                },
                {
                color: "Amethyst Orchid",
                hex: "#926AA6",
                year: "2015",
                season: "Fall"
                },

                //Spring 2015
                {
                color: "Aquamarine",
                hex: "#9DC3D4",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Scuba Blue",
                hex: "#00ABC0",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Beveled Glass",
                hex: "#7ACCB8",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Classic Blue",
                hex: "#0F4C81",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Toasted Almond",
                hex: "#D2B49C",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Strawberry Ice",
                hex: "#E78B90",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Tangerine",
                hex: "#F88F58",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Custard",
                hex: "#E5D68E",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Marsala",
                hex: "#964F4C",
                year: "2015",
                season: "Spring"
                },
                {
                color: "Glacier Gray",
                hex: "#C5C6C7",
                year: "2015",
                season: "Spring"
                },

                //Fall 2014
                {
                color: "Radiant Orchid",
                hex: "#8b4584",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Royal Blue",
                hex: "#1e3176",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Aluminum",
                hex: "#75796a",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Aurora Red",
                hex: "#a90118",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Misted Yellow",
                hex: "#d9b74b",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Sangria",
                hex: "#760030",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Mauve Mist",
                hex: "#af8ea9",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Cognac",
                hex: "#60413c",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Bright Cobalt",
                hex: "#014983",
                year: "2014",
                season: "Fall"
                },
                {
                color: "Cypress",
                hex: "#363b25",
                year: "2014",
                season: "Fall"
                },

                //Spring 2014
                {
                color: "Dazzling Blue",
                hex: "#1464ab",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Violet Tulip",
                hex: "#9096c8",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Freesia",
                hex: "#fcd800",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Paloma",
                hex: "#a7b0ad",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Placid Blue",
                hex: "#82b8dc",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Celosa Orange",
                hex: "#f38047",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Hemlock",
                hex: "#9cccb2",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Radiant Orchid",
                hex: "#ac70ae",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Cayenne",
                hex: "#e0655d",
                year: "2014",
                season: "Spring"
                },
                {
                color: "Sand",
                hex: "#cfb38c",
                year: "2014",
                season: "Spring"
                }
            ],
            messages: []
            }
        }


    }
</script>
<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400);

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font: 1.15em "Source Sans Pro", sans-serif;
        letter-spacing: 0.5px;
        background: #EEEEEE;
        color: black;
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: 0;
    }
    h2 {
        font-size: 2em;
        margin-bottom: 0;
    }
    p {
        margin-top: 0;
    }

    input {
        display: block;
        appearance: none;
        margin: 0.5em auto;
        padding: 0.5em;
        padding-left: 0.1em;
        vertical-align: middle;
        border: 1px solid transparent;
        border-bottom: 1px solid black;
        border-radius: 2px;
        color: black;
        background: transparent;
        font-size: 1em;
        width: 90%;
        width: calc(100% - 1em);
        max-width: 20.25em;
        outline: 0;
    }

    .slideUp-enter-active {
        transform: translateY(0);
        transition: all .3s ease;
    }
    .slideUp-leave-active {
        position: absolute;
    }

    .slideUp-enter {
        transform: translateY(25%);
        opacity: 0;
    }

    .openUp-enter-active, .openUp-leave-active {
        transition: all .5s
    }

    .openUp-enter, .openUp-leave-active {
        opacity: 0;
        transform: translateY(25%);
    }

    .vueApp {
        text-align: center;
        padding: 0.5em;

        .colors {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;

            .color {
                height: 200px;
                margin: 0.5em;
                padding: 0.5em;
                color: white;
                display: flex;
                align-items: flex-end;
                flex-grow: 1;
                transition: all 0.1s;
                cursor: pointer;

                &:hover {
                // padding: 0.55em;
                    text-shadow: 1px 1px 5px rgba(0,0,0,0.5);
                    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
                }

                span {
                    &:first-of-type {
                        align-self: flex-end;
                        text-align: left;
                        font-size: 2em;
                        width: 100%;
                    }

                    &:nth-of-type(2) {
                        text-align: right;
                        align-self: flex-start;
                        font-size: 0.75em;
                        width: 100%;
                    }
                }
            }
        }

        .messages {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;

            .message {
                padding: 1em;
                background: rgba(0,0,0,0.25);
                color: white;
            }
        }
    }
</style>