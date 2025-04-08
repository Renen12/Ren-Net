import { $, createNewElementWithAttributes, randItemFromArray } from "./renWorks.js"
// Certified TOBY FOX code
let DEFAULT_TEXT_DELAY = 150
const DEFAULT_TEXT_ID = "text"
let VOICE_SOURCE = "voice.mp3"
document.onkeydown = (e) => {
    if (e.key === "k") {
        DEFAULT_TEXT_DELAY = 10
        VOICE_SOURCE = "blank.mp3";
    }
}
/**
 * 
 * @param {string} idOfTextElement 
 * @param {string} text 
 * @param {number} delay 
 * @param {()} after 
 */
async function render_text(idOfTextElement, text, delay, after) {
    $(idOfTextElement).textContent = "";
    $("dialogue").querySelectorAll("button").forEach((btn) => { btn.remove(); })
    function add_to_text(char, delay) {
        setTimeout(() => {
            if (char !== " ") {
                let newAudio = document.createElement("audio");
                if (VOICE_SOURCE !== "blank.mp3") {
                    newAudio.src = VOICE_SOURCE;
                    newAudio.play();
                }
            }
            document.getElementById(idOfTextElement).textContent += char;
        }, delay);
    }
    setTimeout(() => {
        setTimeout(() => {
            after();
        }, 500);
    }, delay * text.length);
    for (let i = 0; i < text.length; i++) {
        add_to_text(text[i], i * delay);
    }
}
/**
 * 
 * @param {{
 * after: (),
 * text: string
 * }[]} choices 
 */
function render_choices(choices) {
    for (const choice of choices) {
        let btn = createNewElementWithAttributes("button", { type: "button" }, choice.text);
        btn.onclick = choice.after;
        $("dialogue").appendChild(btn);
    }
}
let path = "DEFAULT";
function render_default_text_of_choice(text, after) {
    render_text(DEFAULT_TEXT_ID, text, DEFAULT_TEXT_DELAY, after);
}
async function inital() {
    render_text(DEFAULT_TEXT_ID, "Are you there?", DEFAULT_TEXT_DELAY, () => {
        render_choices([{
            after: () => {
                render_default_text_of_choice("Good.", () => {
                    render_default_text_of_choice("Let us begin.", () => {
                        render_default_text_of_choice("What path shall you walk?", () => {
                            render_choices([{
                                "text": "The path of might",
                                after: () => {
                                    path = "might"
                                    localStorage.setItem("path", path)
                                    path_reactions();

                                },
                            }, {
                                text: "The path of shadow", after: () => {
                                    path = "shadow"
                                    localStorage.setItem("path", path)
                                    path_reactions();

                                }
                            }, {
                                text: "The path of the mage", after: () => {
                                    path = "mage";
                                    localStorage.setItem("path", path)
                                    path_reactions();

                                }
                            }])
                        });
                    })
                })
            },
            text: "Yes"
        }, {
            after: () => {
                render_default_text_of_choice("No? That's a shame.", () => {setTimeout(() => {
                    window.location = "https://ren-net.net"
                }, 1000);})
            },
            text: "No"
        }])
    })
}
await inital();
/**
 * @param {()} mage 
 * @param {()} might
 * @param {()} shadow 
 */
function path_match(mage, might, shadow) {
    switch (localStorage.getItem("path")) {
        case "mage":
            mage();
            break;
        case "might":
            might();
            break;
        case "shadow":
            shadow();
            break;

    }
}
const MESSAGE = "This would not all be that easy."
function first_encounter() {
    render_default_text_of_choice("Ah, let me recall your story.", () => {
        render_default_text_of_choice("You were lost in the forest, with only the moon guiding you through the winding paths. A bear lay sleeping a few metres ahead. What did you do?", () => {
            path_match(
                () => {
                    render_choices([
                        {
                            text: "Incinerated my foe with the power of fire.",
                            after: () => {
                                render_default_text_of_choice("The bear was set ablaze by your mighty spells. After a few seconds, only the smell of burnt flesh remained.", () => {
                                    render_default_text_of_choice(MESSAGE, () => {
                                        second_encounter();
                                    })
                                })
                            }
                        },
                        {
                            text: "Attempted to sneak past it.",
                            after: () => {
                                render_default_text_of_choice("You were not so lucky. The bear noticed you and tore you to pieces.", () => {
                                    setTimeout(() => {
                                        window.location = "https://ren-net.net"
                                    }, 2000);
                                })
                            }
                        },
                        {
                            text: "Distracted it and ran past.",
                            after: () => {
                                render_default_text_of_choice("You distracted the bear by setting a nearby tree on fire, and ran past it.", () => {
                                    render_default_text_of_choice(MESSAGE, () => {
                                        second_encounter();
                                    })
                                })
                            },
                        }
                    ])
                }, () => {
                    render_choices([
                        {
                            text: "Swung at it with my battleaxe.",
                            after: () => {
                                render_default_text_of_choice("You swung your mighty battleaxe at the foe, striking with such force that it lay dead within a second.", () => {
                                    render_default_text_of_choice(MESSAGE, () => { second_encounter(); })
                                })
                            },
                        },
                        {
                            text: "Jumped over it before it could do anything.",
                            after: () => {
                                render_default_text_of_choice(MESSAGE, () => { second_encounter(); })
                            }
                        },
                    ])
                }, () => {
                    render_choices([
                        {
                            text: "Became one with the shadow and darted past it.",
                            after: () => {
                                render_default_text_of_choice("The bear did not even notice your presence. You ran past it unscathed.", () => {
                                    render_default_text_of_choice(MESSAGE, () => { second_encounter(); })
                                })
                            }
                        },
                        {
                            text: "Stabbed at it with my dagger.",
                            after: () => {
                                render_default_text_of_choice("The bear noticed you sneaking behind it and swallowed you whole.", () => {
                                    setTimeout(() => {
                                        window.location = "https://ren-net.net"
                                    }, 2000);
                                });
                            }
                        }
                    ])
                }
            )
        })
    })
}
/**
 * 
 * @param {{
 * name: string,
 * health: number,
 * attacks: {
 *   attackName: string,
 *   damage: number
 * }[]
 * }} foe
 * @param {{
 * maxHealth: number,
 * health: number,
 * attackDmg: number,
 * }} player
 * @param {(won) => {}} afterBattleEnded 
 */
function enter_combat(player, foe, afterBattleEnded) {
    let playerHealthIndicator = createNewElementWithAttributes("p", { id: "playerHealth", class: "ph" }, `PLAYER HEALTH: ${player.health}`);
    let foeHealthIndicator = createNewElementWithAttributes("p", {
        id: "foeHealth", class: "fh"
    }, `${foe.name}'s HEALTH: ${foe.health}`);
    $("dialogue").appendChild(playerHealthIndicator);
    $("dialogue").appendChild(foeHealthIndicator);
    let css = createNewElementWithAttributes("link", { rel: "stylesheet", href: "fight.css" })
    document.head.appendChild(css)
    function fight(player, foe) {
        if (foe.health - player.attackDmg <= 0) {
            afterBattleEnded(true);
            return true;
        }
        foe.health -= player.attackDmg;
        return false;
    }
    /**
     * 
     * @param {boolean} defend 
     */
    function enemyFight(player, foe, defend) {
        if (player.health - (randItemFromArray(foe.attacks).damage) <= 0) {
            afterBattleEnded(false);
            return true;
        }
        if (defend) {
            player.health -= (randItemFromArray(foe.attacks).damage) / 2;
        } else {
            player.health -= randItemFromArray(foe.attacks).damage;
        }
        return false;
    }
    render_choices([
        {
            after: () => {
                let sounds = ["snd_laz.wav", "snd_laz_c.wav"];
                let audio = createNewElementWithAttributes("audio", { src: randItemFromArray(sounds) });
                audio.play();
                setTimeout(() => {
                    let audio = createNewElementWithAttributes("audio", { src: randItemFromArray(["snd_damage.wav", "snd_damage_c.wav"]) });
                    audio.play()
                }, 560);
                if (fight(player, foe)) {
                    return;
                };
                if (enemyFight(player, foe, false)) {
                    return;
                };
                console.log(`Player: ${JSON.stringify(player)}, Foe: ${JSON.stringify(foe)}`)
                $("playerHealth").textContent = `PLAYER HEALTH: ${player.health}`;
                $("foeHealth").textContent = `${foe.name}'S HEALTH: ${foe.health}`
            },
            text: "FIGHT",
        },
        {
            after: () => {
                if (enemyFight(player, foe, true)) {return;};
                console.log(`Player: ${JSON.stringify(player)}, Foe: ${JSON.stringify(foe)}`)
                $("playerHealth").textContent = `PLAYER'S HEALTH: ${player.health}`;
                $("foeHealth").textContent = `${foe.name}'S HEALTH: ${foe.health}`
            },
            text: "DEFEND"
        }
    ])
}
function second_encounter() {
    render_default_text_of_choice("A snake blocked your path. It attacked you.", () => {
        let default_player = {
            maxHealth: 10,
            health: 10,
            attackDmg: 5,
        }
        enter_combat(default_player, {
            name: "SNAKE",
            health: 20,
            attacks: [
                {
                    name: "Bite",
                    damage: 3
                },
                {
                    name: "Lunge",
                    damage: 2,
                }
            ]
        }, (won) => {
            function remove_battle_ui() {
                for (const x of $("dialogue").querySelectorAll("p")) {
                    if (x.id !== "text") {x.remove();}
                }
            }
            if (won) {
                remove_battle_ui();
                VOICE_SOURCE = "blank.mp3"
                render_default_text_of_choice("Thank you for your feedback! Make sure to contact us at https://ren-net.net/game/a.html!", () => {
                    setTimeout(() => {
                        window.location = "void.html"
                    }, 5000);
                })
            } else {
                remove_battle_ui();
                render_default_text_of_choice("You were torn asunder by the mighty force of the snake.", () => {
                    setTimeout(() => {
                        window.location = "https://ren-net.net"
                    }, 3000);
                })
            }
        })
    })
}
async function path_reactions() {
    let path = localStorage.getItem("path") || "might";
    switch (path) {
        case "might":
            render_default_text_of_choice("Ah, the path of might.", () => {
                render_default_text_of_choice("An honourable path that many seldom walk.", () => {
                    first_encounter()
                })
            })
            break;
        case "mage":
            render_default_text_of_choice("Ah, the path of magic.", () => {
                render_default_text_of_choice("A noble goal indeed.", () => {
                    first_encounter()
                })
            })
            break;
        case "shadow":
            render_default_text_of_choice("Ah, the path of shadow.", () => {
                render_default_text_of_choice("You are the shadow, adversary of light and good. May you not falter.", () => {
                    first_encounter()
                })
            })
            break;
    }
}