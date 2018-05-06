import React, {Component} from 'react';
import './CardService.scss';

export default class CardService extends Component {
    constructor(props){
        super(props);
        this.classCard = this.props.classCard;
        this.category = this.props.category;
    }

    render() {
        return (
            <div className={this.props.classCard}>
                <h1>{this.props.category}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eleifend libero eget hendrerit. Sed gravida leo id lorem molestie imperdiet. Etiam pulvinar varius mi eu accumsan. Proin id elementum dolor. Mauris quis ligula mi. Proin pellentesque lectus id risus tristique, eu posuere orci faucibus. Praesent dignissim mauris nec arcu vestibulum sodales. Phasellus non felis vitae tortor suscipit convallis ut vitae turpis. Maecenas in blandit neque. Maecenas volutpat efficitur purus sed tincidunt. Aliquam tempor luctus massa at tempor. Sed volutpat interdum quam, pulvinar pharetra ante vehicula quis. Nam ut est erat. Pellentesque vulputate tellus ut ullamcorper ultricies.

                    Donec justo mauris, eleifend vel sollicitudin ut, euismod at ligula. Mauris risus turpis, sollicitudin eget orci nec, facilisis ullamcorper ante. Duis sed est eget lorem maximus gravida non nec lectus. Donec ac est consectetur, vulputate purus a, ultrices felis. Cras ullamcorper, neque eget iaculis ullamcorper, neque magna suscipit sapien, et pellentesque augue neque nec turpis. Duis commodo consectetur est, quis congue orci convallis commodo. Curabitur volutpat aliquam quam, et ultricies nibh tincidunt non. Vivamus placerat ultricies tortor lacinia sodales. Ut turpis mi, blandit aliquet placerat eu, fermentum id massa. Curabitur a libero finibus, ultricies nisl id, ultricies purus. Proin eros dui, ornare a lobortis sit amet, tristique non arcu. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam in odio viverra, tincidunt lorem ac, pretium odio. Fusce dictum quam sem, et ultrices risus tincidunt nec.

                    Donec imperdiet dolor et odio mollis, ut luctus ex accumsan. Sed sapien nunc, varius quis ornare vitae, blandit vitae arcu. Mauris augue erat, ornare vel congue quis, varius at sapien. Pellentesque placerat hendrerit neque, eget ornare erat posuere id. Mauris vulputate eget leo sit amet accumsan. Ut ornare lacinia congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean a sollicitudin diam. Ut aliquam erat a porttitor maximus. Morbi felis leo, tristique eget fermentum eu, commodo in mi. Nam egestas mattis euismod.

                    Mauris eget elementum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin hendrerit at magna sit amet tempus. Vestibulum semper viverra libero eget iaculis. Sed dignissim iaculis ante, quis imperdiet velit laoreet ac. Vivamus commodo turpis eros, vitae bibendum justo ultricies sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sodales venenatis tellus et egestas.

                    In lacus mi, finibus non lacinia nec, aliquet vel ipsum. Fusce volutpat enim dolor, et suscipit enim auctor a. Nullam quam massa, laoreet non metus scelerisque, posuere porttitor diam. Phasellus tristique aliquet porta. In tincidunt urna vitae vehicula ultrices. Phasellus elementum libero quis turpis dapibus ullamcorper. Vivamus faucibus consectetur metus, nec aliquet ligula mollis at. In ultrices volutpat diam, quis sagittis felis tincidunt vitae.
                </p>
            </div>
        )
    }
}