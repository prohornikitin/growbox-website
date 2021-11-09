# Segmented Control
![Image of component](Screenshot.png)

## Styling
Component has **style** attribute, 
it is an object which sets style attribute for different parts of component.
Object format described bellow.

Field/Element | Element Description
--------------|-----------
container     | Contains all other parts of component
item          | It's a segment itself. Holds segment text and reacts on click.
separator     | Separates items from each other. **Do not set horizontal margin or padding!**
thumb         | Selected element covers with thumb. Should have the same height as container. It's invisible but has a child **visible_thumb**.
visible_thumb | As said before, it's a child of thumb. Visible part is smaller than thumb.
        

