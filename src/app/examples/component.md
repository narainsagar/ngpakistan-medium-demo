
# Component decorator

```
@Component({
    ...
    selector: 'greet',
    template: `Hello
        <span>{{name}}!</span>
    `,
    styles: `span { color: red; }`
    ...
})
class Greet {
  name: string = 'World';
}
```