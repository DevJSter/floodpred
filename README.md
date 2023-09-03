## Flood Detection System
## Some snapshots of the Model
![image](https://github.com/DevJSter/Flood-Detection-System/assets/115056248/93866414-0633-461d-891f-e2cca639ae21)
![image](https://github.com/DevJSter/Flood-Detection-System/assets/115056248/538ec663-b80c-4973-8547-e2d279cd5f8a)
![image](https://github.com/DevJSter/Flood-Detection-System/assets/115056248/785b9d76-42b5-4519-9c5a-3c65bc697eab)
![image](https://github.com/DevJSter/Flood-Detection-System/assets/115056248/e1257b14-ec50-46d1-a1d1-4373f2b06e14)

## Accuracy of the Random Forest Classifier for random_state 42 is 
![image](https://github.com/DevJSter/Flood-Detection-System/assets/115056248/eb903af4-bb4d-426e-a0d3-c5844bdddc82)

🌊 **Advance Warning System for Floods with Rainfall Analysis** 🌊

## Approach

Disaster response is a critical phase of the disaster management cycle, encompassing various essential elements such as warning systems, evacuation plans, search and rescue operations, providing immediate assistance, damage assessment, continuous support, and rapid restoration.

In our efforts to enhance disaster response, we have developed an advance warning system for floods. Our system offers a user-friendly interface to the general public, enabling them to monitor water flow levels in rivers and receive notifications in case of potential floods within the next 12 months. Users can also access historical river flow trends and visualize rainfall patterns in their specific Sub-Division (area).

With this comprehensive information, individuals and communities can proactively prepare and minimize the impact of floods by taking necessary precautions and alerting the local population.

## Workflow Chart

![Workflow Chart](https://user-images.githubusercontent.com/115056248/235299489-ef8891a9-d8d0-4635-b2d8-d262645a10f4.jpg)

## Steps Taken in the Process

### Connection to HTML:

1. A user issues a request for a domain's root URL `/` to go to its index page.
2. `main.py` maps the URL `/` to a Python function.
3. The Python function finds a web template living in the `templates/` folder.
4. A web template will look in the `static/` folder for any images, CSS files it needs as it renders to HTML.
5. Rendered HTML is sent back to `main.py`.
6. `main.py` sends the HTML back to the browser.

### URL in the Browser and Backend Connection:

1. First, we import the Flask class and a function `render_template`.
2. Next, we create a new instance of the Flask class.
3. We then map the URL `/` to the function `index()`. Now, when someone visits this URL, the function `index()` will execute.
4. The function `index()` uses the Flask function `render_template()` to render the `index.html` template we just created from the `templates/` folder to the browser.
5. Finally, we use `run()` to run our app on a local server.
6. We'll set the debug flag to true, so we can view any applicable error messages if something goes wrong, and so that the local server automatically reloads after we've made changes to the code.
7. When we visited `http://127.0.0.1:5000/`, `main.py` had code in it, which mapped the URL `/` to the Python function `index()`.
8. `index()` found the web template `index.html` in the `templates/` folder, rendered it to HTML, and sent it back to the browser.

## Embracing Disaster Preparedness

Our Flood Detection System empowers communities to be proactive in disaster preparedness. By providing real-time data on river flow levels and rainfall patterns, individuals can make informed decisions and stay ahead of potential floods. This tool enhances public safety and helps minimize the impact of natural disasters on human lives and property.

## Contribute to a Safer World

We believe in the collective effort to build a safer world. If you have ideas for improvements or wish to contribute to the Flood Detection System, please feel free to get involved. Your contributions could make a significant difference in disaster response and preparedness.

## Let's Make a Change Together

Join us in our mission to create a safer future for everyone. Experience the power of technology and data in flood detection and advance warning systems. Together, we can mitigate the effects of floods and protect our communities from the wrath of nature.

**Start Your Journey Towards Disaster Preparedness Now!**
