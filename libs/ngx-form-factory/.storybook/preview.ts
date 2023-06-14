import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Preview } from '@storybook/angular';

export default {
  decorators: [
    (storyFn, context) => {
      const story = storyFn();
      return {
        ...story,
        applicationConfig: {
          providers: [
            ...(story.applicationConfig?.providers ?? []),
            importProvidersFrom(BrowserAnimationsModule),
          ],
        },
        moduleMetadata: {
          ...story.moduleMetadata,
          providers: [
            ...(story.moduleMetadata?.providers || []),
            { provide: '_tmp_', useValue: story.props },
          ],
        },
      };
    },
  ],
} as Preview;
