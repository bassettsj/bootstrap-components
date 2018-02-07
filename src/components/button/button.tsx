import {
  Component,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'bs-button'
})
export class BsButton {
  @Prop() bsType: string;
  @Prop() bsOutline: boolean = false;
  @Prop() bsSize: string;
  @Prop() bsBlock: boolean = false;
  @Prop() href: string;
  @Prop() disabled: boolean = false;
  @Prop() active: boolean = false;
  render() {
    const TagName =  typeof this.href === 'string' ? 'a' : 'button';
    const { disabled, } = this;
    const classNames = [
      'btn',
      `btn-${this.bsOutline ? 'outline-' : ''}${this.bsType}`,
    ];
    const attributes: any = {
      disabled,
    };
    if (TagName === 'a') {
      attributes.href  = this.href;
      if (disabled) {
        classNames.push('disabled');
      }
    } else {
      attributes.type = 'button';
      if (this.active) {
        attributes['aria-pressed'] = true;
        classNames.push('active');
      }
    }

    classNames.push(this.bsSize != null ? `btn-${this.bsSize}` : '');
    classNames.push(this.bsBlock ? 'btn-block' : '');

    return (
      <TagName class={classNames.join(' ')} {...attributes}>
        <slot />
      </TagName>
    );
  }
}
