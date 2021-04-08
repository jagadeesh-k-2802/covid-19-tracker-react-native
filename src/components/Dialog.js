import React from 'react';
import { StyleSheet } from 'react-native';
import { Portal, Dialog, Button, Paragraph } from 'react-native-paper';

const CustomDialog = ({
  style,
  isVisible,
  onDismiss,
  dismissable = true,
  title,
  content,
  contentStyle,
  children,
  dontShowButtons,
  onSuccess,
  hideOkButton,
  hideCancelButton,
  positiveText = 'Ok',
  negativeText = 'Cancel'
}) => {
  // Call onSuccess And Hide The Dialog Also
  const onSuccessCallback = () => {
    onSuccess();
    onDismiss();
  };

  return (
    <Portal>
      <Dialog
        style={style}
        visible={isVisible}
        onDismiss={onDismiss}
        dismissable={dismissable}>
        {title && (
          <Dialog.Title style={styles.titleStyle}>{title}</Dialog.Title>
        )}

        <Dialog.Content style={[styles.contentStyle, contentStyle]}>
          {content && (
            <Paragraph style={styles.paragraphStyle}>{content}</Paragraph>
          )}
          {children}
        </Dialog.Content>

        {!dontShowButtons && (
          <Dialog.Actions>
            {!hideCancelButton && (
              <Button
                style={styles.buttonCancel}
                onPress={onDismiss}
                children={negativeText}
              />
            )}

            {!hideOkButton && (
              <Button
                style={styles.buttonSuccess}
                onPress={onSuccessCallback}
                children={positiveText}
              />
            )}
          </Dialog.Actions>
        )}
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  titleStyle: { marginBottom: 13, fontSize: 18.5 },
  contentStyle: { paddingBottom: 5.5 },
  paragraphStyle: { fontSize: 16 },
  buttonCancel: { marginRight: 10 },
  buttonSuccess: { marginRight: 5 }
});

export default CustomDialog;
