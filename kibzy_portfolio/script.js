var tablinks = document.getElementsByClassName("tab_links")
    var tabcontents = document.getElementsByClassName("tab_contents")

    const opentab = (tabname) => {
        for(tablink of tablinks){
            tablink.classList.remove("active_link")
        }

        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active_tab")
        }

        event.currentTarget.classList.add("active_link");
        document.getElementById(tabname).classList.add('active_tab')
    }

    
    document.getElementById('seeMore_btn').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        // Get all elements with class 'hidden'
        const hiddenProjects = document.querySelectorAll('.work.hidden');

        // Check if we are currently expanding or collapsing
        const expanding = hiddenProjects.length > 0;

        // Toggle the visibility of the projects
        // For some weird reason, toggle does not work
        if (expanding) {
            hiddenProjects.forEach(work => {
                work.classList.remove('hidden');
            });
        } else {
            // If there are no hidden elements, we should hide the ones that were shown last time
            const allProjects = document.querySelectorAll('.work');
            allProjects.forEach((work, index) => {
                if (index >= 2) { // Assuming the first two projects are always visible
                    work.classList.add('hidden');
                }
            });
        }

        // Update the button text based on the current state
        this.textContent = expanding ? 'See Less' : 'See More';
    });

    var sidemenu = document.getElementById("sidemenu");

    var openmenu = () => {
        sidemenu.style.right = "0";
    }

    var closemenu = () => {
        sidemenu.style.right = "-200px";
    }
    

