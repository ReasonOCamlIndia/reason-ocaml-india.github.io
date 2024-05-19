((nil (eval . (progn
		(add-to-list 'reason-mode-hook 'esy-mode)
		(add-to-list 'tuareg-mode-hook 'esy-mode)
		;; (remove-hook 'reason-mode-hook 'esy-mode)
		(add-to-list 'before-save-hook 'eglot-format-buffer)
		;; (remove-hook 'before-save-hook 'eglot-format-buffer)
		))))
