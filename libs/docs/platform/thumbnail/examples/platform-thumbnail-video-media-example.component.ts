import { Component } from '@angular/core';

import { Media, PlatformThumbnailModule } from '@fundamental-ngx/platform/thumbnail';

@Component({
    selector: 'fdp-platform-thumbnail-video-media-example',
    templateUrl: './platform-thumbnail-video-media-example.component.html',
    standalone: true,
    imports: [PlatformThumbnailModule]
})
export class PlatformThumbnailVideoMediaExampleComponent {
    data: Media[] = [
        {
            title: 'Nature Details',
            thumbnailUrl: '../assets/video-thumbnail-1.png',
            mediaType: 'video',
            mediaUrl: '//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
            captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            alt: 'Failed to load //picsum.photos/id/1008/400',
            label: 'nature'
        },
        {
            title: 'Animal Details',
            thumbnailUrl: '../assets/video-thumbnail-2.png',
            mediaType: 'video',
            mediaUrl: '//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true',
            captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            alt: 'Failed to load //picsum.photos/id/1004/400',
            label: 'animal'
        },
        {
            title: 'Culture Details',
            thumbnailUrl: '../assets/video-thumbnail-2.png',
            mediaType: 'video',
            mediaUrl: '//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true',
            captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            alt: 'Failed to load //picsum.photos/id/1001/400',
            label: 'culture'
        },
        {
            title: 'Dance Details',
            thumbnailUrl: '../assets/video-thumbnail-1.png',
            mediaType: 'video',
            mediaUrl: '//www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
            captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            alt: 'Failed to load //picsum.photos/id/1002/400',
            label: 'dance'
        },
        {
            title: 'Nature Details',
            thumbnailUrl: '../assets/video-thumbnail-2.png',
            mediaType: 'video',
            mediaUrl: '//cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true',
            captionFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            audioDescFile: '//gist.github.com/samdutton/ca37f3adaf4e23679957b8083e061177',
            alt: 'Failed to load //picsum.photos/id/1019/400',
            label: 'nature'
        }
    ];
}
