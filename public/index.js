// enable horizontal scrolling on main section
const main = document.getElementsByTagName('main')[0]
window.addEventListener('wheel', e => main.scrollLeft += e.deltaY)

// flag image when button is pressed
clicked = (id) => {
    card = document.getElementById(`card-${id}`) // selected card
    button = card.children[2] // get button html element
    flagged = card.classList.contains('flagged') // boolean of card flag

    // send card id to server via POST (to flip the flag of the card)
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    }

    // make POST request to server
    fetch('/', options)
        .then(res => {
            if (res.status == 200) {
                // successfully updated database, update button color and text
                if (flagged) {
                    card.classList.remove('flagged')
                    button.innerHTML = 'Flag'
                } else {
                    card.classList.add('flagged')
                    button.innerHTML = 'Unflag'
                }
                console.log('Successfully updated flag')
            } else {
                // unable to update flag (probably database access error, check server log)
                window.alert('An error has occured while flagging the photo, please try refreshing the page')
            }
        })
        .catch(err => {
            // fetch failed, unable to communicate with server
            window.alert('Did not receive a response from the server')
        })
}